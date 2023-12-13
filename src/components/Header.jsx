import Link from "next/link";

const Header = () => {
  const urls = [
    {
      title: "Participate on a Survey",
      url: "/",
      icon: "",
    },
    {
      title: "All the Surveys",
      url: "/dashboard",
      icon: "",
    },
  ];
  return (
    <header className="w-full h-[50px]">
      <nav className="w-full h-full p-6">
        <ul className="flex items-center justify-center gap-4">
          {urls.map((item, index) => (
            <li
              key={index}
              className="font-bold group hover:underline  rounded-lg border border-transparent p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30  ">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
