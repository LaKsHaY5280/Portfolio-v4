import { Experience } from "@/data/experience/types";

export const formatDuration = (duration: string) => duration;

interface TimeSpan {
  start: Date;
  end: Date;
}

export const parseDate = (dateStr: string): Date => {
  if (dateStr.toLowerCase() === "present") {
    return new Date();
  }
  const [month, year] = dateStr.split(" ");
  return new Date(`${month} 1, ${year}`);
};

export const calculateTimeSpan = (duration: string): TimeSpan => {
  const [start, end] = duration.split(" – ");
  return {
    start: parseDate(start),
    end: parseDate(end),
  };
};

export const calculateGridPosition = (
  experience: Experience,
  allExperiences: Experience[] = [],
  totalColumns: number = 14
): {
  startColumn: number;
  columnSpan: number;
} => {
  // Sort experiences by start date, oldest first
  const sortedExperiences = [...allExperiences].sort((a, b) => {
    const aSpan = calculateTimeSpan(a.duration);
    const bSpan = calculateTimeSpan(b.duration);
    return aSpan.start.getTime() - bSpan.start.getTime();
  });

  // Find the index of current experience in sorted array
  const currentIndex = sortedExperiences.findIndex((exp) => exp === experience);

  // Check if the experience extends to present
  const timeSpan = calculateTimeSpan(experience.duration);
  const isPresent = timeSpan.end.getTime() === new Date().getTime();

  // Calculate base column span (excluding present items)
  const baseSpan = Math.max(
    Math.ceil(totalColumns / sortedExperiences.length),
    3
  );

  // Calculate start column (each item starts right after the previous one)
  const startColumn = currentIndex === 0 ? 1 : currentIndex * baseSpan + 1;

  // For present experiences, extend to the end of the grid
  const columnSpan = isPresent ? totalColumns - startColumn + 1 : baseSpan;

  return {
    startColumn,
    columnSpan,
  };
};
