// Basic WebSocket server using Node.js and ws
const WebSocket = require("ws");

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });
const testID = "AB123C";
wss.on("connection", (ws) => {
  console.log("Client connected");

  let index = 0;
  const intervalMs = 5000; // Change this to your desired interval in ms
  let interval = null;
  let authenticated = false;

  // Only send data after receiving the correct ID
  ws.on("message", (message) => {
    // Convert Buffer to string if necessary
    const msgStr = Buffer.isBuffer(message) ? message.toString() : message;
    if (!authenticated && msgStr === testID) {
      console.log("🚀 ~ message: AUTHENTICATED", msgStr);
      authenticated = true;
      // Send each turno object in order, looping back to the start
      const sendTurno = () => {
        ws.send(JSON.stringify(patientMessages[index]));
        index = (index + 1) % patientMessages.length;
      };
      sendTurno(); // Send first turno immediately
      interval = setInterval(sendTurno, intervalMs);
    }
    // Optionally handle other client messages
  });

  ws.on("close", () => {
    if (interval) clearInterval(interval);
    console.log("🚀 ~ Client disconnected");
  });
});

console.log(`WebSocket server running on ws://192.168.68.31:${PORT}`);

console.log(`WebSocket server running on ws://localhost:${PORT}`);

const patientMessages = [
  {
    turnos: [
      { turno: "A 12", box: "10" },
      { turno: "B 21", box: "11" },
      { turno: "C 10", box: "23" },
      { turno: "D 10", box: "09" },
    ],
  },
  {
    turnos: [
      { turno: "A 13", box: "09" },
      { turno: "A 12", box: "10" },
      { turno: "B 21", box: "11" },
      { turno: "C 10", box: "23" },
    ],
  },
  {
    turnos: [
      { turno: "B 22", box: "05" },
      { turno: "A 13", box: "09" },
      { turno: "A 12", box: "10" },
      { turno: "B 21", box: "11" },
    ],
  },

  // 1
  {
    turnos: [
      { turno: "C 11", box: "14" },
      { turno: "B 22", box: "05" },
      { turno: "A 13", box: "09" },
      { turno: "A 12", box: "10" },
    ],
  },
  // 2
  {
    turnos: [
      { turno: "D 11", box: "02" },
      { turno: "C 11", box: "14" },
      { turno: "B 22", box: "05" },
      { turno: "A 13", box: "09" },
    ],
  },
  // 3
  {
    turnos: [
      { turno: "A 14", box: "12" },
      { turno: "D 11", box: "02" },
      { turno: "C 11", box: "14" },
      { turno: "B 22", box: "05" },
    ],
  },
  // 4
  {
    turnos: [
      { turno: "B 23", box: "07" },
      { turno: "A 14", box: "12" },
      { turno: "D 11", box: "02" },
      { turno: "C 11", box: "14" },
    ],
  },
  // 5
  {
    turnos: [
      { turno: "C 12", box: "18" },
      { turno: "B 23", box: "07" },
      { turno: "A 14", box: "12" },
      { turno: "D 11", box: "02" },
    ],
  },
  // 6
  {
    turnos: [
      { turno: "D 12", box: "03" },
      { turno: "C 12", box: "18" },
      { turno: "B 23", box: "07" },
      { turno: "A 14", box: "12" },
    ],
  },
  // 7
  {
    turnos: [
      { turno: "A 15", box: "15" },
      { turno: "D 12", box: "03" },
      { turno: "C 12", box: "18" },
      { turno: "B 23", box: "07" },
    ],
  },
  // 8
  {
    turnos: [
      { turno: "B 24", box: "06" },
      { turno: "A 15", box: "15" },
      { turno: "D 12", box: "03" },
      { turno: "C 12", box: "18" },
    ],
  },
  // 9
  {
    turnos: [
      { turno: "C 13", box: "22" },
      { turno: "B 24", box: "06" },
      { turno: "A 15", box: "15" },
      { turno: "D 12", box: "03" },
    ],
  },
  // 10
  {
    turnos: [
      { turno: "D 13", box: "04" },
      { turno: "C 13", box: "22" },
      { turno: "B 24", box: "06" },
      { turno: "A 15", box: "15" },
    ],
  },
];
