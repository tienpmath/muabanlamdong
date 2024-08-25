import React from "react";
import Link from "next/link";
import ProductDetailOne from "@/components/ProductDetailOne";
import type { Metadata, ResolvingMetadata } from "next";

async function getData() {
  const res = await fetch("https://admin.raovatlamdong.vn/api/app/product", {
    next: { tags: ["collection"] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await fetch(
    `https://admin.raovatlamdong.vn/api/app/product/product?slug=${slug}`,
    { next: { revalidate: 10000 } }
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        "https://https://admin.raovatlamdong.vn/uploads/host/my-file-container/" +
          product.image,
        ...previousImages,
      ],
    },
  };
}

const ProductDetailSlug = async (props: any) => {
  //console.log(props);
  const slug = props.params.slug;
  //console(slug);
  //console.log(id);
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/app/product/product?slug=${slug}`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );

  const data = await res.json();
  const datap = getData();
  // console.log(data);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    image: data.image,
    description: data.description,
  };
  return (
    <>
      <ProductDetailOne datap={datap} data={data} />
    </>
  );
};

export default ProductDetailSlug;
