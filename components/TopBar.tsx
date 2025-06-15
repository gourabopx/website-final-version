"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopBarButton {
  text?: string | null;
  link?: string | null;
  textColor: string;
  backgroundColor: string;
}

interface TopBar {
  id: string;
  title: string;
  link: string;
  textColor: string;
  backgroundColor?: string | null;
  button?: TopBarButton | null;
}

export default function TopBar() {
  const [topBars, setTopBars] = useState<TopBar[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopBars() {
      try {
        const response = await fetch("/api/topbar");
        const data = await response.json();
        if (data.success) {
          setTopBars(data.data);
        }
        console.log(data);
      } catch (error) {
        console.error("Error fetching top bars:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTopBars();
  }, []);

  useEffect(() => {
    if (topBars.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === topBars.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [topBars.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === topBars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? topBars.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <div className="h-12 bg-gray-100 animate-pulse">
        <div className="max-w-7xl mx-auto h-full"></div>
      </div>
    );
  }

  if (topBars.length === 0) {
    return null;
  }

  const currentTopBar = topBars[currentIndex];

  return (
    <div
      className="relative"
      style={{
        backgroundColor: currentTopBar.backgroundColor || "#000000",
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center h-7 px-4">
          <Link
            href={currentTopBar.link}
            className="flex-1 text-center"
            style={{ color: currentTopBar.textColor }}
          >
            <span className="text-sm font-medium">{currentTopBar.title}</span>
          </Link>

          {currentTopBar.button && (
            <Link
              href={currentTopBar.button.link || "#"}
              className={cn(
                "px-4 py-1 rounded-full text-sm font-medium ml-4",
                "transition-all duration-200 hover:opacity-90"
              )}
              style={{
                backgroundColor: currentTopBar.button.backgroundColor,
                color: currentTopBar.button.textColor,
              }}
            >
              {currentTopBar.button.text}
            </Link>
          )}
        </div>

        {topBars.length > 1 && (
          <>
            {/* Previous button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/10 hover:bg-black/20 transition-all"
              style={{ color: currentTopBar.textColor }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/10 hover:bg-black/20 transition-all"
              style={{ color: currentTopBar.textColor }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-1">
              {topBars.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all",
                    index === currentIndex
                      ? "bg-current opacity-100"
                      : "bg-current opacity-40"
                  )}
                  style={{ color: currentTopBar.textColor }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
