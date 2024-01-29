fn main() {
    let names = ["Luca", "Marco", "Vittorio", "Giovanni"];

    println!("{}", names.join(" - "));

    let mut students = vec![
        (1, "Luca", "Rossi", 20),
        (2, "Mario", "Bianchi", 24),
        (3, "Giovanni", "Verdi", 30),
    ];

    // Remove the student "Giovanni"
    students.remove(2);

    // Add the student "Francesco"
    students.push((3, "Francesco", "Verdi", 41));

    println!("{:?}", students);
}