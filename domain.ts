function getDomain(website: string) {
  let parts = website.split(".");

  let domain = parts[1];
  domain = "." + domain;
  return domain;
}
console.log(getDomain("ping.gg"));
