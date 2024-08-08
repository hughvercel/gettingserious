/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nhaysh311pV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Dog Walking Schedule</h1>
        <p className="text-muted-foreground">Keep track of your dog's walking schedule with our easy-to-use planner.</p>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Walker</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Monday</TableCell>
                <TableCell>8:00 AM</TableCell>
                <TableCell>John Doe</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tuesday</TableCell>
                <TableCell>5:30 PM</TableCell>
                <TableCell>Jane Smith</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wednesday</TableCell>
                <TableCell>11:00 AM</TableCell>
                <TableCell>Bob Johnson</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Thursday</TableCell>
                <TableCell>3:00 PM</TableCell>
                <TableCell>Sarah Lee</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Friday</TableCell>
                <TableCell>9:30 AM</TableCell>
                <TableCell>Mike Williams</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Saturday</TableCell>
                <TableCell>2:00 PM</TableCell>
                <TableCell>Emily Davis</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sunday</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>David Lee</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
