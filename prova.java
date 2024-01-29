class User {
    private String name;
    private int age;

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        User user = new User("Cosimo", 30);

        User newUser = new User(user);

        newUser.setName("Paolo");

        System.out.println(newUser); // Output: User{name='Paolo', age=30}
        System.out.println(user); // Output: User{name='Cosimo', age=30}
    }
}
