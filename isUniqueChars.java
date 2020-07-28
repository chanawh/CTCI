package CTCI;

public class isUniqueChars {

    static boolean isUniqueChars(String str) {
        if (str.length() > 128) return false;

        boolean[] char_set = new boolean[128];
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i);
            if (char_set[val]) {
                return false;
            }
                char_set[val] = true;
        }
        return true;
    }

    public static void main(String[] args){
        String sample = "Hello.";

        System.out.println(isUniqueChars(sample));

        char result = sample.charAt(1);
        int result2 = sample.charAt(1);

        System.out.println(result);
        System.out.println(result2);
    }
}