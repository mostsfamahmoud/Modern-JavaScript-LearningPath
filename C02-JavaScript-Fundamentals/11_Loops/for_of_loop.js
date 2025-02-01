let name = "JavaScript";

for (let char of name) {
  console.log("Character: " + char);
}

let phoneNumber = "01066112347";

for (let char of phoneNumber) {
  console.log(char);
}

// Using break
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// Using continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
