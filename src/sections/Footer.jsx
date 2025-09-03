const Footer = () => {
    return (
      <footer className="bg-white/5" id="footer">
        <div className="container p-4 text-center">
          <p className="text-white/40 font-serif font-semibold">
            &copy;{new Date().getFullYear()} Code Info. All rights reserverd
          </p>
        </div>
      </footer>
    );  
}
export default Footer;