export function getAllDogs() {
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  return fetch("/dogs/2");
}

export function postNewDog() {
  const params = new URLSearchParams({
    name: "Max",
    age: 2,
  });

  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
}

export function postNewDogV2(name, age) {
  const params = new URLSearchParams({
    name: name,
    age: age,
  });

  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
}

export function deleteDog(id) {
  let stringID = id.toString();
  let url = "/dogs/" + stringID + "/delete";

  return fetch(url, {
    method: "POST",
    header: { "AUTH": "ckyut5wau0000jyv5bsrud90y" },
    body: false,
  });
}
