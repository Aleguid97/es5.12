class User {
	constructor(firstName, lastName, age, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
	}

	compareAge(ageToCompare) {
		return ageToCompare.age > this.age
			? this.firstName +
					" " +
					this.lastName +
					" è più giovane di " +
					ageToCompare.firstName +
					" " +
					ageToCompare.lastName
			: this.firstName + " " + this.lastName + " è più vecchio di " + this.firstName + " " + this.lastName;
	}
}

const userOne = new User("Mario", "Rossi", "45", "Roma");
const userTwo = new User("Alessandro", "Bianchi", "48", "Napoli");
const userThree = new User("Luca", "Verdi", "56", "Milano");

console.log(userThree.compareAge(userTwo));