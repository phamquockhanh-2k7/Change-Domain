module.exports = (req, res) => {
  // 1. Lấy tên miền đích từ Biến môi trường (Environment Variables)
  // Nếu bạn quên cài đặt trên Vercel, nó sẽ mặc định về vuotlink.vip
  const targetDomain = process.env.TARGET_DOMAIN || "https://vuotlink.vip";

  // 2. Lấy phần đuôi link mà khách truy cập (ví dụ: /abc1234)
  const path = req.url;

  // 3. Xử lý chuẩn hóa Link (Xóa dấu / ở cuối domain đích nếu lỡ tay nhập dư)
  const cleanTarget = targetDomain.replace(/\/$/, ""); 

  // 4. Ghép lại thành link hoàn chỉnh
  // Ví dụ: https://vuotlink.vip/abc1234
  const finalDestination = `${cleanTarget}${path}`;

  // 5. Thực hiện chuyển hướng (301 Permanent Redirect)
  // Khách sẽ lập tức bay sang trang đích
  res.redirect(301, finalDestination);
};
