console.log("✅ Multilogin Web Mimic：支付修复脚本已注入");

const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Arial&family=Times+New+Roman&display=swap";
fontLink.rel = "stylesheet";
fontLink.type = "text/css";
document.head.appendChild(fontLink);

const removeCSP = () => {
    const metas = document.querySelectorAll("meta[http-equiv='Content-Security-Policy']");
    metas.forEach(meta => {
        meta.parentNode.removeChild(meta);
        console.warn("🚨 CSP meta 被移除");
    });
};

window.addEventListener("error", function (e) {
    console.warn("⚠️ 页面加载错误：", e.message, "→", e.filename);
}, true);

const fix = () => {
    const url = location.href;
    if (url.includes("stripe.com") || url.includes("pay.google.com") || url.includes("voila.ca")) {
        console.log("🔧 收银页修复逻辑已触发");
    }
};

window.addEventListener("DOMContentLoaded", () => {
    removeCSP();
    fix();
});
