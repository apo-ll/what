import { Icons } from "@/components/Icons";

const navigation = [
    {
      id: "home",
      name: "Discover",
      link: "/",
    },
    {
      id: "movies",
      name: "Movies",
      link: "/Movies",
    },
    {
      id: "shows",
      name: "Shows",
      link: "/Shows",
    },
  ];

  const home = [
    {
      id: "home",
      name: "Home",
      link: "/",

    },
    {
      id: "movies",
      name: "Movies",
      link: "/Movies",
      icon: Icons.movie,
    },
    {
      id: "shows",
      name: "Shows",
      link: "/Shows",
      icon: () => (<Icons.home  />),
    },
    {
      id: "library",
      name: "Library",
      link: "/Library",
      icon: () => (<Icons.home className='fill-green-900' />),
    },
  ]

  const DetailsNav = [
    {
      id: "home",
      name: "Home",
      link: "/",
    }
  ]

  export { navigation, home, DetailsNav };
  