import Card from "@/components/card";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      price: 10,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      price: 20,
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <main className="min-h-screen mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
      {products.map((product) => (
        <Card key={`${product.name}-${product.id}`} {...product} />
      ))}
    </main>
  );
}
