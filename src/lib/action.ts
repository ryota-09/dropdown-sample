"use server"

export const dropdownFetchAction = async (id : number) => {
  console.log("dropdownFetchAction");
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  const random = Math.floor(Math.random() * 10) + 1
  return {
    data: Array.from({ length: random }, () => data),
  }
}
