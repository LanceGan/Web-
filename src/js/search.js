document.querySelector(".search-right a").addEventListener("click", (event) => {
  event.preventDefault();
  const query = document.getElementById("search-input").value.toLowerCase();
  const results = document.getElementById("search-results");
  results.innerHTML = "";

  if (query) {
    // 模拟搜索结果
    const mockData = [
      { title: "介绍", content:"",url:"introduction.html"},
	  { title: "新闻", content:"",url:"xinwenzhongxin.html" },
	  { title: "业务", content:"",url:"shengchanjidi.html" },
	  { title: "联系", content:"",url:"lianxiwomen-lianxifagnshi.html" },
    ];

    const filteredData = mockData.filter((item) =>
      item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
    );

    filteredData.forEach((item) => {
  
		alert("找到相关内容，请在搜索框左侧点击连接查看详细内容")
		const resultItem = document.createElement("div");
		
		const BarEle = document.createElement("br");
		
		const titleElement = document.createElement("h1");
		titleElement.textContent = item.title;
		
		const contentElement = document.createElement("p");
		contentElement.textContent = item.content;
		
		const linkElement = document.createElement("a");
		linkElement.href = `${item.url}`;
		linkElement.textContent = "查看详情";
		
		/* resultItem.appendChild(titleElement);
		resultItem.appendChild(contentElement); */
		resultItem.appendChild(BarEle);
		resultItem.appendChild(BarEle);
		resultItem.appendChild(BarEle);
		resultItem.appendChild(linkElement);
		
		results.appendChild(resultItem);
    });

    if (filteredData.length === 0) {
      alert("没有找到相关内容!");
    }
  }
});
