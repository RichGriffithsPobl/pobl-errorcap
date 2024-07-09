import { getAllErrors } from "@/actions/errorActions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

const ErrorPage = async () => {
  const errors = await getAllErrors();

  return (
    <main className="m-8">
      <h2 className="text-xl font-bold">Error List</h2>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Friendly Message</TableHead>
              <TableHead>Error Message</TableHead>
              <TableHead>Application</TableHead>
              <TableHead className="text-right">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!errors.length && (
              <TableRow>
                <TableCell colSpan={3}>No errors found</TableCell>
              </TableRow>
            )}
            {errors.map((error) => (
              <TableRow key={error.id}>
                <TableCell className="font-medium">
                  {error.friendlyMessage}
                </TableCell>
                <TableCell>{error.errorMessage}</TableCell>
                <TableCell>{error.application}</TableCell>
                <TableCell className="text-right">
                  {moment(error.createdAt).format("DD MMM YYYY, HH:MM")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <table>
          <thead>
            <tr>
              <th>Friendly Message</th>
              <th>Error Message</th>
              <th>Stack Trace</th>
              <th>Project</th>
              <th>Capture time</th>
            </tr>
          </thead>
          <tbody>
            {errors.map((error) => (
              <tr key={error.id}>
                <td>{error.friendlyMessage}</td>
                <td>{error.errorMessage}</td>
                <td>{error.stackTrace}</td>
                <td>{error.project}</td>
                <td>{moment(error.createdAt).format("DD MMM YYYY, HH:MM")}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </main>
  )
}

export default ErrorPage
