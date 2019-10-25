import java.util.Random;

/**
 * @author zhixilang
 * @version 1.0
 * @date 2019-10-24 15:02
 */
public class SkipList<T> {

    /**
     * 节点总数
     */
    private long nodes;

    /**
     * 当前最大层级
     */
    private int currentMaxLevel;

    /**
     * 最大层级
     */
    private int maxLevel;

    /**
     * 抛硬币时概率界限
     */
    private double probability;

    /**
     * 头、尾节点
     */
    private SkipListNode<T> head, tail;

    public SkipList() {
        this.maxLevel = 3;
        this.probability = 0.5D;
        clear();
    }

    public SkipList(int maxLevel, double probability) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        clear();
    }


    class SkipListNode<T> {

        /**
         * 头节点
         * 初始化使用
         */
        public static final int HEAD_KEY = Integer.MIN_VALUE;

        /**
         * 尾节点
         * 初始化使用
         */
        public static final int TAIL_KEY = Integer.MAX_VALUE;

        /**
         * key
         */
        private int key;

        /**
         * val
         */
        private T val;

        /**
         * 上、下、左、右节点
         */
        private SkipListNode<T> up, down, left, right;

        public SkipListNode(int key, T val) {
            this.key = key;
            this.val = val;
        }

        public int getKey() {
            return key;
        }

        public void setKey(int key) {
            this.key = key;
        }

        public T getVal() {
            return val;
        }

        public void setVal(T val) {
            this.val = val;
        }

        public SkipListNode<T> getUp() {
            return up;
        }

        public void setUp(SkipListNode<T> up) {
            this.up = up;
        }

        public SkipListNode<T> getDown() {
            return down;
        }

        public void setDown(SkipListNode<T> down) {
            this.down = down;
        }

        public SkipListNode<T> getLeft() {
            return left;
        }

        public void setLeft(SkipListNode<T> left) {
            this.left = left;
        }

        public SkipListNode<T> getRight() {
            return right;
        }

        public void setRight(SkipListNode<T> right) {
            this.right = right;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (null == obj) {
                return false;
            }
            if (!(obj instanceof SkipListNode)) {
                return false;
            }
            SkipListNode<T> node;
            try {
                node = (SkipListNode<T>) obj;
            } catch (Exception e) {
                return false;
            }
            return node.getKey() == this.getKey() && this.getVal().equals(node.getVal());
        }

        @Override
        public String toString() {
            return "SkipListNode: key = " + key + ", val = " + val;
        }
    }

    /**
     * 向跳表增加节点
     * @param key key
     * @param value val
     */
    public void put(int key, T value) {
        SkipListNode<T> node = findNode(key);
        if (key == node.getKey()) {
            node.setVal(value);
            return;
        }
        SkipListNode<T> newNode = new SkipListNode<>(key, value);
        backLink(node, newNode);

        int currentLevel = 0;

        // 抛硬币
        while (new Random().nextDouble() >= probability && currentLevel < maxLevel) {
            if (currentLevel >= currentMaxLevel) {
                // 新建空白层
                currentMaxLevel++;
                SkipListNode<T> newHead = new SkipListNode<>(SkipListNode.HEAD_KEY, null);
                SkipListNode<T> newTail = new SkipListNode<>(SkipListNode.TAIL_KEY, null);
                horizontalLink(newHead, newTail);
                verticalLink(newHead, head);
                verticalLink(newTail, tail);
                head = newHead;
                tail = newTail;
            }

            while (null == node.getUp()) {
                node = node.getLeft();
            }
            node = node.getUp();

            // 仅最底层存储val
            SkipListNode<T> newNodeUp = new SkipListNode<>(key, null);

            backLink(node, newNodeUp);
            verticalLink(newNodeUp, newNode);
            newNode = newNodeUp;

            currentLevel++;
        }
        nodes++;
    }

    /**
     * 获取val
     * @param key key
     * @return val
     */
    public T get(int key) {
        SkipListNode<T> node = findNode(key);
        if (key == node.getKey()) {
            return node.getVal();
        }
        return null;
    }

    /**
     * 删除节点
     * @param key key
     * @return 节点存在，返回val
     */
    public T remove(int key) {

        SkipListNode<T> node = findNode(key);
        if (key != node.getKey()) {
            return null;
        }
        T val = node.getVal();

        while (null != node) {
            // REMARK 是否需要删除仅有此node的level
            SkipListNode<T> upNode = node.getUp();
            node.getLeft().setRight(node.getRight());
            node.getRight().setLeft(node.getLeft());
            node = upNode;
        }
        nodes--;
        return val;
    }

    /**
     * 查找key或key前面节点
     * @return node
     */
    private SkipListNode<T> findNode(int key) {
        SkipListNode<T> node = head;
        while (true) {
            while (node.getRight().getKey() != tail.getKey() && node.getRight().getKey() <= key) {
                node = node.getRight();
            }
            // 下一层寻找
            if (null == node.getDown()) {
                break;
            } else {
                node = node.getDown();
            }
        }
        // node.key <= key
        return node;
    }

    /**
     * 清空跳表
     */
    private void clear() {
        currentMaxLevel = 0;
        nodes = 0L;
        head = new SkipListNode<>(SkipListNode.HEAD_KEY, null);
        tail = new SkipListNode<>(SkipListNode.TAIL_KEY, null);
        horizontalLink(head, tail);
    }

    /**
     * 水平连接两节点
     * @param node1 leftNode
     * @param node2 rightNode
     */
    private void horizontalLink(SkipListNode<T> node1, SkipListNode<T> node2) {
        node1.setRight(node2);
        node2.setLeft(node1);
    }

    /**
     * 垂直连接两节点
     * @param node1 upNode
     * @param node2 downNode
     */
    private void verticalLink(SkipListNode<T> node1, SkipListNode<T> node2) {
        node1.setDown(node2);
        node2.setUp(node1);
    }

    /**
     * node1后面插入新节点node2
     * @param node1 前面节点
     * @param node2 新节点
     */
    private void backLink(SkipListNode<T> node1, SkipListNode<T> node2) {
        node1.getRight().setLeft(node2);
        node2.setRight(node1.getRight());

        node1.setRight(node2);
        node2.setLeft(node1);

    }

    public long getNodes() {
        return nodes;
    }

    public void setNodes(long nodes) {
        this.nodes = nodes;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        SkipListNode<T> node = head;
        while (null != node.getDown()) {
            node = node.getDown();
        }
        do {
            sb.append("key= ").append(node.getKey()).append(",val=").append(node.getVal()).append("\n");
            node = node.getRight();
        } while (null != node);

        return sb.toString();
    }

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
