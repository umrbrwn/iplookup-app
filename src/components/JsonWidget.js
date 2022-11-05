function JsonWidget({ data }) {
  if (!data) {
    return (<p className="text-gray-300">No data to display.</p>);
  }

  return (
    <ul>
      {
        Object.entries(data).map(([key, value]) => (
          <li key={key} className="leading-loose text-lg">
            <span className="float-left flex items-center">
              <span className="mr-1">
                <svg className="text-lime-500" width="20" height="20" strokeWidth="2">
                  <use href="#pound-sign" />
                </svg>
              </span>
              <span className="text-gray-50">{key}</span>
            </span>
            <span className="text-gray-400 ml-1 mr-2">:</span>
            <span className="text-gray-400">
              "<span className="text-lime-200">{value}</span>"
            </span>
            <span className="text-gray-400">,</span>
          </li>
        ))
      }
    </ul>
  );
}

export default JsonWidget;
