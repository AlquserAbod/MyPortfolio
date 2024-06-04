"use client";

import dataProvider from "@refinedev/simple-rest";


const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export default dataProvider(apiUrl);
