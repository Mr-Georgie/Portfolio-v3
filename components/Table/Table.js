import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export const TableComponent = ({ backend }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Year</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="hidden md:table-cell">Built With</TableHead>
          <TableHead className="text-right hidden xl:table-cell">
            Made At
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {backend.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">{project.year}</TableCell>
            <TableCell className="w-[290px]">
              <Link
                href={`/backend/${project.id}`}
                className="cursor-pointer text-[#2a4c55] dark:text-[#6ac4db] hover:underline"
              >
                {project.projectName}
              </Link>
            </TableCell>
            <TableCell className="hidden md:table-cell md:pr-4">
              {project.builtWith}
            </TableCell>
            <TableCell className="text-right hidden xl:table-cell xl:pr-4">
              {project.madeAt}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
