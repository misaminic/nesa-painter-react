import Link from 'next/link';
const data = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'Work',
    url: '/work/',
  },
  {
    id: 3,
    text: 'Exhibitions',
    url: '/Exhibitions/',
  },
  {
    id: 4,
    text: 'Bio',
    url: '/blog/',
  },
  {
    id: 5,
    text: 'Contact',
    url: '/contact/',
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link href={link.url}>{link.text}</Link>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ''}`}>
      {tempLinks}
    </ul>
  );
};
