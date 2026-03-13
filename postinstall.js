const { execSync } = require("child_process");

try {
  console.log("Baixando yt-dlp...");
  execSync(
    "curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o node_modules/yt-dlp-exec/bin/yt-dlp",
    { stdio: "inherit" }
  );

  execSync("chmod +x node_modules/yt-dlp-exec/bin/yt-dlp");
  console.log("yt-dlp instalado com sucesso");
} catch (err) {
  console.error("Erro instalando yt-dlp", err);
}