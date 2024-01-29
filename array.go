package main

import "fmt"

func main() {
	students := []struct {
		id      int
		name    string
		surname string
		age     int
	}{
		{1, "Luca", "Rossi", 20},
		{2, "Mario", "Bianchi", 24},
		{3, "Giovanni", "Brambilla", 30},
	}

	// Remove the student "Giovanni"
	students = removeStudent(students, 3)

	// Add the student "Francesco"
	students = append(students, struct {
		id      int
		name    string
		surname string
		age     int
	}{3, "Francesco", "Verdi", 41})

	fmt.Println(students)
}

func removeStudent(students []struct {
	id      int
	name    string
	surname string
	age     int
}, index int) []struct {
	id      int
	name    string
	surname string
	age     int
} {
	newStudents := make([]struct {
		id      int
		name    string
		surname string
		age     int
	}, len(students)-1)

	i := 0
	for j := 0; j < len(students); j++ {
		if j != index {
			newStudents[i] = students[j]
			i++
		}
	}

	return newStudents
}
