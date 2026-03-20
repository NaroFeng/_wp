/**
 * UI 動態卡片渲染器：產生具有互動輸入框的練習題卡片
 */
const container = document.getElementById('results-container');

function createCard(id, title, description, inputHTML, onMount) {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
        <div class="card-header">
            <span class="badge">練習 ${id}</span>
            <h2>${title}</h2>
        </div>
        <p class="description" style="margin-bottom: 0.5rem;">${description}</p>
        <div class="input-container" style="margin-bottom: 1rem;">
            ${inputHTML}
        </div>
        <div class="result-box">
            <pre><code id="output${id}">等待輸入...</code></pre>
        </div>
    `;
    container.appendChild(card);
    onMount(); // 綁定事件監聽器
}


/**
 * 練習 1: 判斷奇偶數
 */
createCard(1, "判斷奇偶數", "輸入一個整數，程式將判斷它是奇數還是偶數：", 
    `<input type="number" id="input1" class="interactive-input" placeholder="請輸入整數...">`,
    () => {
        document.getElementById('input1').addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            const out = document.getElementById('output1');
            if (e.target.value === '') { out.innerText = '等待輸入...'; return; }
            if (isNaN(val)) { out.innerText = '請輸入有效數字...'; return; }
            out.innerText = (val % 2 === 0) ? '結果: 偶數' : '結果: 奇數';
        });
    }
);

/**
 * 練習 2: 陣列求和
 */
createCard(2, "陣列求和", "請輸入多個數字，請利用「空白鍵」來分隔，程式將自動偵測並加總：",
    `<input type="text" id="input2" class="interactive-input" placeholder="例如：1 2 3 4 5">`,
    () => {
        document.getElementById('input2').addEventListener('input', (e) => {
            const val = e.target.value.trim();
            const out = document.getElementById('output2');
            if (!val) { out.innerText = '等待輸入...'; return; }
            let arr = val.split(/\s+/).map(Number);
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (!isNaN(arr[i])) sum += arr[i];
            }
            out.innerText = `加總結果: ${sum}`;
        });
    }
);

/**
 * 練習 3: 尋找下一個 2 的次方數
 */
createCard(3, "尋找下一個 2 的次方數", "輸入一個數值，尋找大於該數值且為 2 的 n 次方之數值：",
    `<input type="number" id="input3" class="interactive-input" placeholder="請輸入數值...">`,
    () => {
        document.getElementById('input3').addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            const out = document.getElementById('output3');
            if (e.target.value === '') { out.innerText = '等待輸入...'; return; }
            if (isNaN(val)) { out.innerText = '請輸入有效數字...'; return; }
            let power = 1;
            while (power <= val) power *= 2;
            out.innerText = `運算結果: ${power}`;
        });
    }
);

/**
 * 練習 4: 物件自我介紹
 */
createCard(4, "物件自我介紹", "請在下方兩個格子輸入姓名跟年齡：",
    `<div class="input-row" style="display:flex; gap:0.5rem;">
        <input type="text" id="input4-name" class="interactive-input" style="margin-bottom:0;" placeholder="姓名 (例: 小明)">
        <input type="number" id="input4-age" class="interactive-input" style="margin-bottom:0;" placeholder="年齡 (例: 18)">
    </div>`,
    () => {
        function update() {
            const name = document.getElementById('input4-name').value || '___';
            const age = document.getElementById('input4-age').value || '___';
            document.getElementById('output4').innerText = `大家好我是${name} 今年${age}歲`;
        }
        document.getElementById('input4-name').addEventListener('input', update);
        document.getElementById('input4-age').addEventListener('input', update);
    }
);

/**
 * 練習 5: JSON 解析與字串化
 */
createCard(5, "JSON 解析與屬性新增", "嘗試修改下方的 JSON，程式將解析它並自動加上 isActive: true",
    `<input type="text" id="input5" class="interactive-input" value='{"user":"test"}'>`,
    () => {
        const out = document.getElementById('output5');
        const input = document.getElementById('input5');
        function update() {
            try {
                let obj = JSON.parse(input.value);
                obj.isActive = true;
                out.innerText = JSON.stringify(obj, null, 2);
            } catch(e) {
                out.innerText = "❌ JSON 格式錯誤，請修正...";
            }
        }
        input.addEventListener('input', update);
        update(); // 初始呼叫以便展示預設結果
    }
);

/**
 * 練習 6: 陣列過濾
 */
createCard(6, "陣列過濾 (> 10)", "輸入多個數字利用空白鍵分隔，過濾出大於 10 的數字：",
    `<input type="text" id="input6" class="interactive-input" placeholder="例如：5 12 8 130 44">`,
    () => {
        document.getElementById('input6').addEventListener('input', (e) => {
            const val = e.target.value.trim();
            const out = document.getElementById('output6');
            if (!val) { out.innerText = '等待輸入...'; return; }
            let arr = val.split(/\s+/).map(Number);
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                if (!isNaN(arr[i]) && arr[i] > 10) result.push(arr[i]);
            }
            out.innerText = JSON.stringify(result, null, 2);
        });
    }
);

/**
 * 練習 7: 字母頻率統計
 */
createCard(7, "字母頻率統計", "輸入一長串英文，即時計算字母頻率 (略過空白)：",
    `<input type="text" id="input7" class="interactive-input" placeholder="請輸入任意字串...">`,
    () => {
        document.getElementById('input7').addEventListener('input', (e) => {
            const str = e.target.value;
            const out = document.getElementById('output7');
            if (!str) { out.innerText = '等待輸入...'; return; }
            let counts = {};
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (char === ' ') continue;
                if (counts[char]) counts[char]++;
                else counts[char] = 1;
            }
            out.innerText = JSON.stringify(counts, null, 2);
        });
    }
);

/**
 * 練習 8: 陣列反轉
 */
createCard(8, "陣列反轉", "利用空白鍵分隔數值，程式會動態將陣列反轉排序：",
    `<input type="text" id="input8" class="interactive-input" placeholder="例如：1 2 3 4 5">`,
    () => {
        document.getElementById('input8').addEventListener('input', (e) => {
            const val = e.target.value.trim();
            const out = document.getElementById('output8');
            if (!val) { out.innerText = '等待輸入...'; return; }
            let arr = val.split(/\s+/);
            let left = 0, right = arr.length - 1;
            while (left < right) {
                let temp = arr[left]; arr[left] = arr[right]; arr[right] = temp;
                left++; right--;
            }
            out.innerText = JSON.stringify(arr, null, 2);
        });
    }
);

/**
 * 練習 9: JSON 陣列尋找最高分
 */
createCard(9, "JSON 尋找最高分", "解析包含學生成績的 JSON 陣列，動態找出最高分的人：",
    `<textarea id="input9" class="interactive-textarea" style="min-height:90px;">[
  {"name":"Alice","score":85},
  {"name":"Bob","score":92},
  {"name":"Charlie","score":78}
]</textarea>`,
    () => {
        const out = document.getElementById('output9');
        const input = document.getElementById('input9');
        function update() {
            try {
                let students = JSON.parse(input.value);
                if (!Array.isArray(students)) throw new Error("需為陣列");
                if (students.length === 0) { out.innerText = '陣列為空...'; return; }
                let topStudent = null;
                let max = -1;
                for (let i = 0; i < students.length; i++) {
                    if (students[i].score !== undefined && students[i].score > max) { 
                        max = students[i].score; 
                        topStudent = students[i].name; 
                    }
                }
                out.innerText = topStudent ? `🏆 最高分學生: ${topStudent} (${max} 分)` : '找不到含有分數的學生';
            } catch(e) { out.innerText = "❌ 格式錯誤的 JSON 陣列，請修正..."; }
        }
        input.addEventListener('input', update);
        update();
    }
);

/**
 * 練習 10: 購物車動態結帳模擬
 */
createCard(10, "購物車結帳模擬", "編輯下方兩個 JSON (庫存清單 與 要買的購物車)，觀察扣除結果：",
    `<p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.25rem;">店面庫存 JSON:</p>
     <textarea id="input10-inv" class="interactive-textarea" style="min-height:50px;">{"apple": 5, "banana": 2, "orange": 0}</textarea>
     <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.25rem; margin-top:0.5rem;">你要買的清單 JSON:</p>
     <textarea id="input10-buy" class="interactive-textarea" style="min-height:50px;">[{"name": "apple", "qty": 3}, {"name": "banana", "qty": 4}]</textarea>`,
    () => {
        const out = document.getElementById('output10');
        const invInput = document.getElementById('input10-inv');
        const buyInput = document.getElementById('input10-buy');
        function update() {
            try {
                let inventory = JSON.parse(invInput.value);
                let purchaseList = JSON.parse(buyInput.value);
                let cart = {};
                for (let i = 0; i < purchaseList.length; i++) {
                    let item = purchaseList[i].name;
                    let qty = purchaseList[i].qty;
                    if (inventory[item] !== undefined && inventory[item] > 0) {
                        let taken = 0;
                        while (taken < qty && inventory[item] > 0) { 
                            inventory[item]--; 
                            taken++; 
                        }
                        if (taken > 0) cart[item] = taken;
                    }
                }
                out.innerText = JSON.stringify({ remainingInventory: inventory, myCart: cart }, null, 2);
            } catch(e) { out.innerText = "❌ JSON 資料解析錯誤..."; }
        }
        invInput.addEventListener('input', update);
        buyInput.addEventListener('input', update);
        update();
    }
);
