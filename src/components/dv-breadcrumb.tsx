"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const DvBreadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/").filter(Boolean) || [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home Breadcrumb */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const isLastSegment = index === pathSegments.length - 1;
          const formattedSegment = segment
            .replace(/-/g, " ")
            .replace(/^./, (char) => char.toUpperCase());

          return (
            <React.Fragment key={index}>
              {/* Separator */}
              <BreadcrumbSeparator />
              {/* Breadcrumb Item */}
              <BreadcrumbItem>
                {isLastSegment ? (
                  <span className="text-primary">{formattedSegment}</span> // No link for the last segment
                ) : (
                  <BreadcrumbLink
                    href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                  >
                    {formattedSegment}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DvBreadcrumb;
