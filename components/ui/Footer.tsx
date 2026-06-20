function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 text-center">
        {currentYear} تمام حقوق برای فروشگاه محفوظ است
      </div>
    </footer>
  );
}

export default Footer;
