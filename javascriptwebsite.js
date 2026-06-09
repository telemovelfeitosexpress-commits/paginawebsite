(function () {

      var carimbos = [

        {
          marca: "Clika",
          modelo: "CP-10",
          tamanho: "10 x 27 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779876732/CP10_gzcozw.png",
          url: "https://feitosdiversos.pt/24368-CP10",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780318666/Exemplo_CP10_dcaofi.jpg",
          ]
        },
        {
          marca: "Clika",
          modelo: "CP-20",
          tamanho: "14 x 38 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779877103/CP20_hl73ha.png",
          url: "https://feitosdiversos.pt/24369-CP20",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780318732/Exemplo_CP20_bqznqi.jpg",
          ]
        },
        {
          marca: "Clika",
          modelo: "CP-30",
          tamanho: "18 x 47 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779877103/CP30_wwlhqw.png",
          url: "https://feitosdiversos.pt/24370-CP30",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780318772/Exemplo_CP30_yt8gb4.jpg",
          ]
        },
        {
          marca: "Clika",
          modelo: "CP-40",
          tamanho: "23 x 59 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779877104/CP40_r1a4f0.png",
          url: "https://feitosdiversos.pt/24371-CP40",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780318908/Exemplo_CP40_w2ieyc.jpg",
          ]
        },
        {
          marca: "Clika",
          modelo: "CP-50",
          tamanho: "30 x 69 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779877104/CP50_rqafsi.png",
          url: "https://feitosdiversos.pt/24372-CP50",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780318977/Exemplo_CP50_vpzhdn.jpg",
          ]
        },
        {
          marca: "Clika",
          modelo: "CP-60",
          tamanho: "37 x 75 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779877103/CP60_zqjm3z.png",
          url: "https://feitosdiversos.pt/24373-CP60",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780319067/Exemplo_CP60_rybray.jpg",
          ]
        },
        {
          marca: "Brother",
          modelo: "C-1212",
          tamanho: "12 x 12 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779879138/C1212_q6ig4s.png",
          url: "https://feitosdiversos.pt/19012-C1212",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780319828/Exemplo_1212_weyqhm.jpg",
          ]
        },
        {
          marca: "Brother",
          modelo: "C-1438",
          tamanho: "14 x 38 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779879302/C1438_h5u8qc.png",
          url: "https://feitosdiversos.pt/18329-C1438",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780319957/Exemplo_1438_lbbczh.jpg",
          ]
        },
        {
          marca: "Brother",
          modelo: "C-1850",
          tamanho: "18 x 50 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779880735/C1850_piiitx.png",
          url: "https://feitosdiversos.pt/19014-CAR1850",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780320051/Exemplo_1850_kt0ybn.jpg",
          ]
        },
        {
          marca: "Brother",
          modelo: "C-2260",
          tamanho: "22 x 60 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779880509/C2260_kaknnl.png",
          url: "https://feitosdiversos.pt/18809-C2260P",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780320182/Exemplo_2260_dvi2ev.jpg",
          ]
        },
        {
          marca: "Brother",
          modelo: "C-2770",
          tamanho: "27 x 70 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779880954/C2770_rqy6ot.png",
          url: "https://feitosdiversos.pt/18872-C2770P",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780320502/Exemplo_2770_joqouk.jpg",
          ]
        },
        {
          marca: "Brother",
          modelo: "C-3458",
          tamanho: "34 x 58 mm",
          cor: "Preto",
          imagem: "https://res.cloudinary.com/dsphfxjix/image/upload/v1779881149/C3458_i01fm4.png",
          url: "https://feitosdiversos.pt/19017-CAR3458",
          exemplos: [
            "https://res.cloudinary.com/dsphfxjix/image/upload/v1780320792/Exemplo_3458_egz93d.jpg",
          ]
        },
      ];

      var whatsappNumber = "351911176513";

      var brandSelect = document.getElementById("brand");
      var sizeSelect = document.getElementById("size");
      var grid = document.getElementById("grid");

      var modal = document.getElementById("modal");
      var modalTitle = document.getElementById("modalTitle");
      var modalContent = document.getElementById("modalContent");



      async function fetchPrice(url) {

        try {

          const response = await fetch(url);

          const html = await response.text();

          const parser = new DOMParser();

          const doc = parser.parseFromString(html, "text/html");

          // OpenCart price selectors
          const priceElement =
            doc.querySelector(".price") ||
            doc.querySelector(".product-price") ||
            doc.querySelector("ul.list-unstyled h2");

          if (!priceElement) {
            return "Preço indisponível";
          }

          let price = priceElement.textContent.trim();

          // Get only first price
          price = price.split("\n")[0];
          price = price.split("/")[0];
          price = price.split("Preço sem")[0];
          price = price.trim();

          return price;

        } catch (e) {

          return "Erro";

        }

      }

      function initFilters() {

        var brands = [...new Set(carimbos.map(function (c) {
          return c.marca;
        }))];

        var sizes = [...new Set(carimbos.map(function (c) {
          return c.tamanho;
        }))];

        brandSelect.innerHTML =
          '<option value="Todos">Todas as marcas</option>';

        sizeSelect.innerHTML =
          '<option value="Todos">Todos os tamanhos</option>';

        brands.forEach(function (b) {

          var opt = document.createElement("option");

          opt.value = b;
          opt.textContent = b;

          brandSelect.appendChild(opt);

        });

        sizes.forEach(function (s) {

          var opt = document.createElement("option");

          opt.value = s;
          opt.textContent = s;

          sizeSelect.appendChild(opt);

        });

      }

      function getFiltered() {

        return carimbos.filter(function (item) {

          return (
            (brandSelect.value === "Todos" ||
              item.marca === brandSelect.value)

            &&

            (sizeSelect.value === "Todos" ||
              item.tamanho === sizeSelect.value)
          );

        });

      }

      function groupByBrand(items) {

        var grouped = {};

        items.forEach(function (item) {

          if (!grouped[item.marca]) {
            grouped[item.marca] = [];
          }

          grouped[item.marca].push(item);

        });

        return grouped;

      }

      function render() {

        var grouped = groupByBrand(getFiltered());

        grid.innerHTML = "";

        Object.keys(grouped).forEach(function (brand) {

          var section = document.createElement("div");

          section.className = "mb-10";

          var title = document.createElement("h2");

          title.className = "brand-title";

          title.textContent = brand;

          var wrapper = document.createElement("div");

          wrapper.className =
            "grid md:grid-cols-2 lg:grid-cols-4 gap-6";

          grouped[brand].forEach(function (item) {

            var card = document.createElement("div");

            card.className =
              "bg-white rounded-2xl shadow p-4";

            card.innerHTML =

              '<img src="' + item.imagem + '" class="h-40 w-full object-contain bg-gray-50 rounded-xl mb-3">' +

              '<h3 class="text-xl font-bold">' +
              item.modelo +
              '</h3>' +

              '<p class="text-sm text-gray-500 mb-1">' +
              item.tamanho +
              '</p>' +

              '<p class="text-sm"><b>Cor:</b> ' +
              item.cor +
              '</p>' +

              '<p class="price text-blue-600 font-bold text-lg mb-3">A carregar...</p>' +

              '<button class="exemplo-btn w-full mb-2 bg-gray-800 text-white py-2 rounded-xl">' +
              '<span class="font-bold text-base">Ver Exemplo</span>' +
              '</button>' +

              '<a target="_blank" href="https://wa.me/' +
              whatsappNumber +
              '?text=' +
              encodeURIComponent(
                "Olá! Quero encomendar o carimbo " +
                item.marca +
                " " +
                item.modelo
              ) +
              '" class="block text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-bold !text-white !no-underline">' +
              '<span class="text-base font-bold">Encomendar WhatsApp</span>' +
              '</a>';

            fetchPrice(item.url).then(function (price) {

              card.querySelector(".price").textContent = price;

            });

            card.querySelector(".exemplo-btn").onclick =
              function () {

                openModal(item);

              };

            wrapper.appendChild(card);

          });

          section.appendChild(title);
          section.appendChild(wrapper);

          grid.appendChild(section);

        });

      }

      function renderGallery(image) {

        modalContent.innerHTML = '';

        var img = document.createElement("img");

        img.src = image;
        img.style.width = "100%";
        img.style.maxHeight = "420px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "12px";

        modalContent.appendChild(img);
      }

      window.openModal = function (item) {

        modalTitle.textContent =
          "Exemplo - " + item.marca + " " + item.modelo;

        renderGallery(item.exemplos[0]);

        modal.style.display = "block";
      };

      window.closeModal = function () {

        modal.style.display = "none";

      };
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeModal();
        }
      });

      document.querySelectorAll(".accordion-item, .menu-card").forEach(function (item) {
        item.addEventListener("click", function () {
          var target = this.getAttribute("data-scroll");
          if (!target) return;

          var el = document.querySelector(target);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
      const cxsw_data = {
        clika: [
          { model: "CP-10", w: 10, h: 27 },
          { model: "CP-20", w: 14, h: 38 },
          { model: "CP-30", w: 18, h: 47 },
          { model: "CP-40", w: 23, h: 59 },
          { model: "CP-50", w: 30, h: 69 },
          { model: "CP-60", w: 37, h: 75 }
        ],
        brother: [
          { model: "C-1212", w: 12, h: 12 },
          { model: "C-1438", w: 14, h: 38 },
          { model: "C-1850", w: 18, h: 50 },
          { model: "C-2260", w: 22, h: 60 },
          { model: "C-2770", w: 27, h: 70 },
          { model: "C-3458", w: 34, h: 58 }
        ]
      };

      document.addEventListener("DOMContentLoaded", function () {

        const brand = document.getElementById("cxsw_brand");
        const model = document.getElementById("cxsw_model");
        const stamp = document.getElementById("cxsw_stamp");
        const text = document.getElementById("cxsw_text");
        const previewText = document.getElementById("cxsw_previewText");
        const fontFamily = document.getElementById("cxsw_fontFamily");
        const fontSize = document.getElementById("cxsw_fontSize");
        const fontSizeLabel = document.getElementById("cxsw_fontSizeLabel");
        const fontWeight = document.getElementById("cxsw_fontWeight");

        function loadModels() {
          const items = cxsw_data[brand.value];
          model.innerHTML = "";
          items.forEach((m, i) => {
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = `${m.model} (${m.w} x ${m.h} mm)`;
            model.appendChild(opt);
          });
          updateSize();
        }

        function updateSize() {
          const item = cxsw_data[brand.value][model.value];
          const base = 10;
          stamp.style.width = (Math.max(item.w, item.h) * base) + "px";
          stamp.style.height = (Math.min(item.w, item.h) * base) + "px";
          const maxFontSize = Math.floor((Math.min(item.w, item.h) * base) / 1.25) - 4;
          fontSize.max = maxFontSize;
          if (parseInt(fontSize.value) > maxFontSize) {
            fontSize.value = maxFontSize;
            fontSizeLabel.textContent = maxFontSize + "px";
          }

          setTimeout(cxsw_autoFit, 0);
        }

        brand.addEventListener("change", loadModels);
        model.addEventListener("change", updateSize);

        text.addEventListener("input", function () {
          previewText.innerHTML = this.value.replace(/\n/g, "<br>") || "Carimbo Personalizado";
        });

        fontFamily.addEventListener("change", function () {
          previewText.style.fontFamily = this.value;
        });

        fontSize.addEventListener("input", function () {
          fontSizeLabel.textContent = this.value + "px";
          cxsw_fitText();
        });

        fontWeight.addEventListener("change", function () {
          previewText.style.fontWeight = this.value;
        });

        loadModels();

        previewText.style.fontFamily = fontFamily.value;
        previewText.style.fontSize = fontSize.value + "px";
        previewText.style.fontWeight = fontWeight.value;
        fontSizeLabel.textContent = fontSize.value + "px";
      });

      function cxsw_autoFit() {
        const wrap = document.querySelector(".cxsw_previewWrap");
        const box = document.getElementById("cxsw_zoomBox");
        const stamp = document.getElementById("cxsw_stamp");
        if (!wrap || !stamp) return;

        const scale = Math.min(
          wrap.clientWidth / stamp.offsetWidth,
          wrap.clientHeight / stamp.offsetHeight,
          1
        ) * 0.88;

        box.style.transform = `scale(${scale})`;
      }
      function cxsw_fitText() {
        const stamp = document.getElementById("cxsw_stamp");
        const zoomBox = document.getElementById("cxsw_zoomBox");
        const previewText = document.getElementById("cxsw_previewText");
        const fontSize = document.getElementById("cxsw_fontSize");

        // Temporarily remove zoom to get real dimensions
        const oldTransform = zoomBox.style.transform;
        zoomBox.style.transform = "scale(1)";

        let size = parseInt(fontSize.value);
        previewText.style.fontSize = size + "px";

        while (previewText.scrollHeight > stamp.offsetHeight && size > 4) {
          size--;
          previewText.style.fontSize = size + "px";
        }

        // Restore zoom
        zoomBox.style.transform = oldTransform;
      }
      window.cxsw_download = function () {
        const stamp = document.getElementById("cxsw_stamp");
        const zoomBox = document.getElementById("cxsw_zoomBox");
        const previewText = document.getElementById("cxsw_previewText");
        const brand = document.getElementById("cxsw_brand");
        const model = document.getElementById("cxsw_model");
        const fontFamilyEl = document.getElementById("cxsw_fontFamily");
        const fontWeightEl = document.getElementById("cxsw_fontWeight");

        const brandText = brand.options[brand.selectedIndex].text;
        const modelText = model.options[model.selectedIndex].text;
        const fileName = `${brandText} - ${modelText}`.replace(/[\/\\?%*:|"<>]/g, "-");

        // Get real stamp dimensions (unzoomed)
        const oldTransform = zoomBox.style.transform;
        zoomBox.style.transform = "scale(1)";
        const W = stamp.offsetWidth;
        const H = stamp.offsetHeight;
        zoomBox.style.transform = oldTransform;

        const scale = 4;
        const CW = W * scale;
        const CH = H * scale;

        const canvas = document.createElement("canvas");
        canvas.width = CW;
        canvas.height = CH;
        const ctx = canvas.getContext("2d");

        // White background
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, CW, CH);

        // Dashed border
        ctx.strokeStyle = "#111111";
        ctx.lineWidth = 2 * scale;
        ctx.setLineDash([6 * scale, 4 * scale]);
        ctx.strokeRect(scale, scale, CW - scale * 2, CH - scale * 2);

        // Get font properties from computed style
        const cs = window.getComputedStyle(previewText);
        const family = fontFamilyEl.value || "Arial";
        const weight = fontWeightEl.value || "700";
        const fontSize = parseFloat(document.getElementById("cxsw_fontSize").value) * scale;

        ctx.fillStyle = "#000000";
        ctx.font = weight + " " + fontSize + "px " + family;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const rawText = (previewText.innerText || "Carimbo Personalizado").trim();
        const padding = 10 * scale;
        const maxWidth = CW - padding * 2;
        const lineHeight = fontSize * 1.3;

        const wrappedLines = [];
        rawText.split("\n").forEach(line => {
          if (!line.trim()) { wrappedLines.push(""); return; }
          const words = line.split(" ");
          let current = "";
          words.forEach(word => {
            const test = current ? current + " " + word : word;
            if (ctx.measureText(test).width > maxWidth && current) {
              wrappedLines.push(current);
              current = word;
            } else {
              current = test;
            }
          });
          if (current) wrappedLines.push(current);
        });

        const totalH = wrappedLines.length * lineHeight;
        const startY = (CH - totalH) / 2 + lineHeight / 2;
        wrappedLines.forEach((line, i) => {
          ctx.fillText(line, CW / 2, startY + i * lineHeight, maxWidth);
        });

        const link = document.createElement("a");
        link.download = fileName + ".png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      };

      const fontWeights = {
        "Arial": [
          { value: "400", label: "Normal" },
          { value: "700", label: "Bold" },
          { value: "900", label: "Heavy" }
        ],
        "Calibri": [
          { value: "100", label: "Light" },
          { value: "400", label: "Normal" },
          { value: "700", label: "Bold" },
        ],
        "Verdana": [
          { value: "400", label: "Normal" },
          { value: "700", label: "Bold" },
        ],
        "Tahoma": [
          { value: "400", label: "Normal" },
          { value: "700", label: "Bold" },
        ],
        "monospace": [
          { value: "400", label: "Normal" },
          { value: "700", label: "Bold" },
        ],
        "Courier New": [
          { value: "400", label: "Normal" },
          { value: "700", label: "Bold" },
        ],
        "Times New Roman": [
          { value: "400", label: "Normal" },
          { value: "700", label: "Bold" },
        ],
      };

      const fontFamilySelect = document.getElementById("cxsw_fontFamily");
      const fontWeightSelect = document.getElementById("cxsw_fontWeight");

      function updateFontWeights(font) {
        fontWeightSelect.innerHTML = "";

        fontWeights[font].forEach(weight => {
          const option = document.createElement("option");

          option.value = weight.value;
          option.textContent = weight.label;

          if (weight.value === "700") {
            option.selected = true;
          }

          fontWeightSelect.appendChild(option);
        });
      }

      fontFamilySelect.addEventListener("change", () => {
        updateFontWeights(fontFamilySelect.value);
      });

      // Initial load
      updateFontWeights(fontFamilySelect.value);

      window.addEventListener("resize", cxsw_autoFit);

      brandSelect.onchange = render;
      sizeSelect.onchange = render;
      setTimeout(function () {
        document.body.appendChild(modal);
      }, 0);
      function boot() {
        if (!document.getElementById("grid")) return;

        initFilters();
        render();
      }
      window.addEventListener("load", boot);

    })();
