async function getData() {
  const response = await fetch("ZonAnnTs.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);

  let years = [],
    globalTemp = [],
    northHem = [],
    southHem = [];

  table.forEach((row) => {
    const columns = row.split(",");
    years.push(columns[0]);
    globalTemp.push(parseFloat(columns[1]) + 14);
    northHem.push(parseFloat(columns[2]) + 14);
    southHem.push(parseFloat(columns[3]) + 14);
  });

  return { years, globalTemp, northHem, southHem };
}

async function chartData() {
  const data = await getData();

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.years,
      datasets: [
        {
          label: "Global Temperature in °C",
          data: data.globalTemp,
          borderWidth: 1,
          borderColor: "#059FF7",
          backgroundColor: "#059FF7",
        },
        {
          label: "Northern Hemisphere Temp in °C",
          data: data.northHem,
          borderWidth: 1,
          borderColor: "#F70905",
          backgroundColor: "#F70905",
        },
        {
          label: "Southern Hemisphere Temp in °C",
          data: data.southHem,
          borderWidth: 1,
          borderColor: "#33FF49",
          backgroundColor: "#33FF49",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

chartData();
