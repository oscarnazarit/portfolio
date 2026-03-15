import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <h1>Contact Me</h1>
      <footer>
        <ul>
          <li className="link">
            <Link to="mailto:oscarnazarit65@gmail.com">Email</Link>
          </li>
          <li className="link">
            <Link target="_blank" rel="noopener norefferer" to="http://linkedin.com/in/nazarit1">
              LinkedIn
            </Link>
          </li>
          <li className="link">
            <Link target="_blank" rel="noopener norefferer" to="">
              Somethign else
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Contact;
