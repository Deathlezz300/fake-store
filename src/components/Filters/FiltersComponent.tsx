import { Category, Filters as FilterI } from "@/interface";

import React from "react";
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";

interface props {
  filterValues: FilterI;
  categories: Category[];
  handleSetFilter: (type: string, newValue: string) => void;
}

const sort_price = [
  {
    value: "default",
    label: "Default",
  },
  {
    value: "low-high",
    label: "Low to High",
  },
  {
    value: "high-low",
    label: "High to Low",
  },
];

const alphabetic_sort = [
  {
    value: "default",
    label: "Default",
  },
  {
    value: "A-Z",
    label: "A-Z",
  },
  {
    value: "Z-A",
    label: "Z-A",
  },
];

export const FiltersComponent = ({
  filterValues,
  handleSetFilter,
  categories,
}: props) => {
  return (
    <div className="w-[90%] grid grid-cols-3 md:grid-cols-5 gap-2">
      <Input
        type="text"
        placeholder="Product name"
        className="col-span-3 md:col-span-2"
        value={filterValues.title}
        onChange={(e) => handleSetFilter("title", e.target.value)}
      />
      <Select
        value={filterValues.priceLevel}
        onValueChange={(value) => handleSetFilter("priceLevel", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a sort order" />
        </SelectTrigger>
        <SelectContent>
          {sort_price.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={filterValues.alphabetic}
        onValueChange={(value) => handleSetFilter("alphabetic", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a sort order" />
        </SelectTrigger>
        <SelectContent>
          {alphabetic_sort.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={filterValues.category}
        onValueChange={(value) => handleSetFilter("category", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a cateogry" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key={"All"} value="All">
            All
          </SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category} className="capitalize">
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
