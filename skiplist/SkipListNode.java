package skiplist;

/**
 * @author zhixilang
 * @version 1.0
 * @date 2019-10-24 15:21
 */
public class SkipListNode<T> {

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
        if (!(obj instanceof SkipListNode<?>)) {
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
        return "skiplist.SkipListNode: key = " + key + ", val = " + val;
    }
}
