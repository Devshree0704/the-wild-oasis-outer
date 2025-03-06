import Link from "next/link";

const Navigation = () => {
  return (
    <ul className="flex justify-end space-x-8">
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
};

export default Navigation;
