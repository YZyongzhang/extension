// 模拟一个简单的 key-value 数据库，可以根据需求修改为更复杂的查询逻辑
const keyValueDatabase = {
  "奇数序列求和":
    `n=int(input("请输入正整数N:"))
sum=0
for i in range(n+1):
    if i%2==1:
        sum+=i
print("结果为:",sum)`,
  "汉诺塔": `def hanoi(n,A,B,C):                   #定义汉诺塔函数,参数n是圆盘数，A、B、C是3根柱
   if n==1:                           #判断圆盘数，如果等于1，递归条件
      print(A,'->',C,' ')          # 直接将A柱上的圆盘移动到C柱上
   else:                              #否则，进行递归移动
      hanoi(n-1,A,C,B)               #递归将A柱最上方的n-1个盘子落在B柱
      print(A,'->',C,' ') # 输出将A柱上的圆盘移动到C柱上,也就是将A柱的最小面盘子落在C柱
      hanoi(n-1,B,A,C)             #递归将B柱上的n-1个盘子，落在C柱

a=input("输入n:")
hanoi(int(a),'A','B','C') `,
  "两数求和": `try:
    a,b=input().split(',')
    c=int(a)
    d=int(b)
    print(c+d)
except:
    print("错误")`,
  "列表排序": `try:
    a=input().split()
    b=list(map(int,a))
    b.sort()
    print(' '.join(str(i) for i in b))
except:
    print("错误")`
};

// 监听从内容脚本传来的复制内容
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getValueForKey') {
    const key = request.key;
    const value = keyValueDatabase[key] || "没有找到对应的值";
    sendResponse({ value });
  }
});
