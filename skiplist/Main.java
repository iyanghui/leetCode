package skiplist;

public class Main {

    public static void main(String[] args) {
        SkipList<String> list = new SkipList<>();
        list.put(0, "yang0");
        list.put(4, "yang4");
        list.put(19, "yang19");
        list.put(19, "yang19-1");
        list.put(13, "yang13");

        list.remove(19);
        System.out.println("==val = " + list.get(13) + ", nodes = " + list.getNodes());

        System.out.println(list);
    }
}
