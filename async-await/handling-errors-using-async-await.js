// Example 1
async function f() {
  try {
    const response = await fetch("https://some-host.com/wrong-url");
  } catch (e) {
    console.log("Some error: " + e);
  }
}

// f();

// Example 2
async function f() {
  const response = await fetch("https://some-host.com/wrong-url");
}

f()
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log("Some error: " + e);
  });
