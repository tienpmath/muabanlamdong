async function fetchData(skip: any, max: any) {
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/app/product?SkipCount=${skip}&MaxResultCount=${max}`,
    {
      next: { tags: ["collection"] },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
//getCategory
async function fetchDataCategory(id: any, skip: any, max: any) {
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/app/product/product-category/${id}?SkipCount=${skip}&MaxResultCount=${max}`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
//getCategory
async function fetchDataCategoryCount(id: any) {
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/app/product/product-category/${id}`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export { fetchData, fetchDataCategory, fetchDataCategoryCount };
