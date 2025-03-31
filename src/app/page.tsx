import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex  flex-col justify-self-center  items-center">
      <p className="font-sans font-semibold text-xl">welcome Page</p>
      <Image alt="" height={"800"} width={"800"} src="/roseflower.jpg" />
      <table className="border border-gray-400 border-separate border-spacing-4">
        <caption>Flowers cag</caption>
        <tbody>
          <tr>
            <th className="border border-gray-300 items-center">Name</th>
            <th className="border border-gray-300 items-center">Image</th>
          </tr>
          <tr>
            <th className="border border-gray-300 items-center">Jasmine</th>
            <th className="border border-gray-300 items-center">
              <Image src="/image.webp" alt="" width={"25"} height={"25"} />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
