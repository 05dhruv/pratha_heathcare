"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

const str = (fd, k, n = 500) => String(fd.get(k) ?? "").trim().slice(0, n);
const int = (fd, k) => Number.parseInt(String(fd.get(k) ?? ""), 10);

function done(...paths) {
  revalidatePath("/", "layout");
  paths.forEach((p) => revalidatePath(p));
}

export async function createPost(fd) {
  requireAdmin();
  const title = str(fd, "title", 200), excerpt = str(fd, "excerpt", 400), content = str(fd, "content", 20000);
  if (!title || !excerpt || !content) return;
  const date = str(fd, "postedAt", 20);
  await prisma.post.create({
    data: { title, excerpt, content, image: str(fd, "image") || null, postedAt: date ? new Date(date) : new Date() },
  });
  done("/admin/posts");
}
export async function deletePost(fd) {
  requireAdmin();
  await prisma.post.delete({ where: { id: int(fd, "id") } });
  done("/admin/posts");
}
export async function togglePost(fd) {
  requireAdmin();
  const id = int(fd, "id");
  const p = await prisma.post.findUnique({ where: { id } });
  if (p) await prisma.post.update({ where: { id }, data: { published: !p.published } });
  done("/admin/posts");
}

export async function createSlide(fd) {
  requireAdmin();
  const title = str(fd, "title", 200);
  if (!title) return;
  await prisma.slide.create({
    data: { title, image: str(fd, "image") || null, link: str(fd, "link") || null, position: int(fd, "position") || 0 },
  });
  done("/admin/slides");
}
export async function deleteSlide(fd) {
  requireAdmin();
  await prisma.slide.delete({ where: { id: int(fd, "id") } });
  done("/admin/slides");
}

export async function addGallery(fd) {
  requireAdmin();
  const url = str(fd, "url");
  const type = str(fd, "type", 10) === "VIDEO" ? "VIDEO" : "IMAGE";
  if (!url) return;
  await prisma.galleryItem.create({ data: { url, type, caption: str(fd, "caption", 200) || null } });
  done("/admin/gallery");
}
export async function deleteGallery(fd) {
  requireAdmin();
  await prisma.galleryItem.delete({ where: { id: int(fd, "id") } });
  done("/admin/gallery");
}

export async function addNotification(fd) {
  requireAdmin();
  const title = str(fd, "title", 300);
  if (!title) return;
  await prisma.notification.create({ data: { title, link: str(fd, "link") || null } });
  done("/admin/notifications");
}
export async function deleteNotification(fd) {
  requireAdmin();
  await prisma.notification.delete({ where: { id: int(fd, "id") } });
  done("/admin/notifications");
}

export async function updateStat(fd) {
  requireAdmin();
  const value = int(fd, "value");
  if (!Number.isFinite(value) || value < 0) return;
  await prisma.stat.update({ where: { id: int(fd, "id") }, data: { value, label: str(fd, "label", 120) } });
  done("/admin");
}

export async function deleteMessage(fd) {
  requireAdmin();
  await prisma.message.delete({ where: { id: int(fd, "id") } });
  done("/admin/inbox");
}
export async function setDonationStatus(fd) {
  requireAdmin();
  const status = str(fd, "status", 10);
  if (!["PENDING", "PAID", "FAILED"].includes(status)) return;
  await prisma.donation.update({ where: { id: int(fd, "id") }, data: { status } });
  done("/admin/inbox");
}
