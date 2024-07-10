export default function Schedule2024({ data }) {
  return (
    <div className=" mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-muted text-center">
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Time
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Pacific Hall
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Innovation Floor
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Volta Room
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Video Conference Room
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((slot, index) => (
              <tr key={index}>
                <td className="px-4 py-3 border-b text-sm font-medium text-muted-foreground">
                  {slot?.time}
                </td>
                <td className="px-4 py-3 border-b">
                  <div>{slot?.sessions?.pacificHall?.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {slot?.sessions?.pacificHall?.speaker}
                  </div>
                </td>
                <td className="px-4 py-3 border-b">
                  <div>{slot?.sessions?.innovationFloor?.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {slot?.sessions?.innovationFloor?.speaker}
                  </div>
                </td>
                <td className="px-4 py-3 border-b">
                  <div>{slot?.sessions?.voltaRoom?.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {slot?.sessions?.voltaRoom?.speaker}
                  </div>
                </td>
                <td className="px-4 py-3 border-b">
                  <div>{slot?.sessions?.videoConferenceRoom?.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {slot?.sessions?.videoConferenceRoom?.speaker}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
