import { getAllErrors } from "@/actions/errorActions";
import moment from "moment";

export default async function Home() {
  const errors = await getAllErrors();

  return (
    <main className="m-8">
      <h2 className="text-xl font-bold">Error List</h2>
      <div>
        <table>
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
        </table>
      </div>
    </main>
  );
}
