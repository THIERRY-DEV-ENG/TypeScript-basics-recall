function getLocation(): void {
  if (!navigator.geolocation) {
    console.log("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
    },
    (error: GeolocationPositionError) => {
      console.log("Error getting location:", error.message);
    }
  );
}

getLocation();


const video = document.getElementById("video") as HTMLVideoElement;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const captureBtn = document.getElementById("captureBtn") as HTMLButtonElement;

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true
    });

    video.srcObject = stream;
  } catch (error) {
    console.error("Camera access denied:", error);
  }
}

captureBtn.addEventListener("click", () => {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);

    console.log("Photo captured");
  }
});

startCamera();


function getNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
}

async function printNumber() {
  const result = await getNumber();
  console.log(result);
}

printNumber();



interface Particpant { id: number; name: string;}
interface Staff { id: number; role: string;}

type UserType= Particpant | Staff | null;


function getLocation(): void {
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      console.error("Error getting location:", error.message);
    }
  );
}

getLocation();

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

function promoteUser(user: User) {
  user.isAdmin = true;
}