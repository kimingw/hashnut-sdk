const ethIcon = '<svg width="18px" height="18px" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 784.37 1277.39" width="50" height="50"><g><g><g><polygon fill="rgb(183,250,255)" fill-rule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "></polygon><polygon fill="rgb(204,196,247)" fill-rule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "></polygon><polygon fill="rgb(199,176,246)" fill-rule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "></polygon><polygon fill="rgb(137,170,243)" fill-rule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "></polygon><polygon fill="rgb(199,176,246)" fill-rule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "></polygon><polygon fill="rgb(137,170,243)" fill-rule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "></polygon></g></g></g></svg>'
const bscIcon = '<svg width="32px" height="32px" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 2496 2496" width="50" height="50"><g><path fill="#F0B90B" d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248 S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"></path><path fill="#FFFFFF" d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3 l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4 L1084.3,821.4z"></path><path fill="#FFFFFF" d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6 l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918 L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578 L1809.2,1578z"></path><polygon fill="#FFFFFF" points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6 	"></polygon><path fill="#FFFFFF" d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4 L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6 l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"></path></g></svg>'
const tronIcon = '<svg width="18px" height="18px" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 64 64" width="50" height="50"><g><path fill="currentColor" fill-rule="evenodd" d="M61.55,19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82,3.82,0,0,0-1.11-.62l0,0C41.56,7,3.63-.09,2.89,0a1.4,1.4,0,0,0-.58.22L2.12.37a2.23,2.23,0,0,0-.52.84l-.05.13v.71l0,.11C5.82,14.05,22.68,53,26,62.14c.2.62.58,1.8,1.29,1.86h.16c.38,0,2-2.14,2-2.14S58.41,26.74,61.34,23a9.46,9.46,0,0,0,1-1.48A2.41,2.41,0,0,0,61.55,19.28ZM36.88,23.37,49.24,13.12l7.25,6.68Zm-4.8-.67L10.8,5.26l34.43,6.35ZM34,27.27l21.78-3.51-24.9,30ZM7.91,7,30.3,26,27.06,53.78Z"></path></g></svg>'
const phoneIcon = '<svg viewBox="0 0 1024 1024" class="_titleRightBtnIcon_lmedj_25" width="16" height="16"><path fill="currentColor" fill-rule="evenodd" d="M661.333333 42.666667H320c-58.88 0-106.666667 47.786667-106.666667 106.666666v725.333334c0 58.88 47.786667 106.666667 106.666667 106.666666h341.333333c58.88 0 106.666667-47.786667 106.666667-106.666666V149.333333c0-58.88-47.786667-106.666667-106.666667-106.666666z m-170.666666 896c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z m192-170.666667H298.666667V170.666667h384v597.333333z"></path></svg>'
const pcIcon = '<svg viewBox="0 0 1024 1024" class="_titleRightBtnIcon_lmedj_25" width="16" height="16"><path fill="currentColor" fill-rule="evenodd" d="M919.565463 121.942283 104.433514 121.942283c-22.036899 0-40.066531 18.029632-40.066531 40.066531L64.366983 682.937161c0 22.036899 18.029632 40.066531 40.066531 40.066531l345.360725 0-10.544147 107.886149L250.5248 830.889841l-10.544147 71.167876 544.03767 0-11.598152-71.167876L584.748884 830.889841l-10.544147-107.886149 345.360725 0c22.036899 0 40.066531-18.029632 40.066531-40.066531L959.631994 162.008814C959.633017 139.971915 941.602362 121.942283 919.565463 121.942283zM935.467641 659.734716 88.531336 659.734716 88.531336 178.113607l846.936305 0L935.467641 659.734716z" p-id="3478"></path></svg>'
const imTokenIcon = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/AABEIADwAPAMBEQACEQEDEQH/xACJAAEAAwEBAQAAAAAAAAAAAAADBAYHBQgAEAACAgIBAwMDBAMAAAAAAAABAgADBAUGBxESEyExUVJhFDKBkRUjQQEAAgMBAQEAAAAAAAAAAAAAAgMEBQYBBwARAAICAgEBBgQEBwAAAAAAAAECAAMEEQUGEhMhMUFCUVJxgiIzYYEUFiNicpGh/9oADAMBAAIRAxEAPwDhq09JnhREdWgkQCI6tBIiyJIVoJEWRHVoMAiOrQYoiOrTkAxg05qBqUdWk2XpEdWnIsiOrQSIBEkK0GLIjq0ExZEdWgxZEdWgxZEYNOQJR1aTpfETs6jV7Hd5tWDrsVr77PhR7AAfJYn2AERfdVj1my1wqiMxsS/NuWmisu59Jot3SflFOI19duFe6/NNVpL9/oCQATKpebw2cKRYoPuI8Jd2dJ8mtRdXpcj2Kx3M4Iet3R1KupIZSOxBHsQZb+DAEHYMyzoVJVgQQdEHzBE1TjXTPabaqrK2NpwcZwGRSve5x9Qp9lEpMvmKaCUqHeOPX2iabjOk8vNVLsl+4qPiBrbkfT0msYfTLieOgFmFbe33W3MT/S9hKZ+XznPhYF/RVE1lPSfCVLpsZrT8Xc7/AOamMc41eBpeQWYmDV6dHoUuE8i3YuPf5l/xt1uRih7W7Tdojc8+6lwcbA5R6cavsV92jdnZOifrKoGk2Z7Uo6tJ5EviJtvB6MjG6e832mvBGef9QsT96VIoLeP9mZ7kWV+U4+m38oeJB8iSZquIrevg+WyKNi87UEeYVQCdSF0v5Pq9Dmbf/KbB6Kb6E8CQzoXVvx/2M5nDuya6O5qDMrHfkCAZF6b5HGwLsr+JvKK6jWwSCRAwETmPUNr8Ohhi3Z/6p/IftprIJZvy0O0nA4rs2N+MV9gf5H0Ei0Vjl+oe3TWe6a/vTsexTvZ+s9RzFz1OfT6fTyzzbYV7DlO3tqbyrS0UofqKh4za8dUasKhT5kdo/d4zxnqLIGVzGa6naqwrH2DUrQaTJRalHVpPl6RNx6N8lxsLNzNHl2BEzmV8dj8eso7FPf7hM7z+I9ldeQg2a/Bvp8Zqul85KbbcSwgC0gpv5vh+80/P6V8Pz8l8hcW/HLklkx7fCv8AhSD2lNVzOdWgTtq+vVhsy8v6a4u+wv3bps7IRtCXHQcZ03HMdqtfhLSHILsSWd+33sfcyFk5V+Wwa6wtryHkBLPC4/E49CmNSE35nzJ+pM6UjybKJzzmGPxzAfHotDbK9CKUHzWD82tLPjcBsu0My/0VP4j8f0me5/mk4zGautgcqxdIPlHzGeYg5PuSSZstTyQjcYNB1F6lHVpPIl+RJCOQQQexEEj0MWdg7E2PjfWLeamqvH2VC7GlAALGbwvA/LfDShy+Bx7mL0t3TH01tZo8LqfLxlVL0F6j1J0/+/WXxetegKdzqNgH+neuVh6eyd/n1a/eW383YWvHGu39srO56ybPLRqtTr0wgfb1rG9az+PhRJmPwNKENfabP7R4CVWb1bk2KVxaFq372PaaZRfl5GZfbkZN723WN5PY7FmY/Uky8VFrUKihVHkBMdbZZdY9ljl3Y7LE7JnytPiIgiOGgwNSjq0ny+Ijq0EiARHVoMWRHVoJEWRHVoMWRJCtBiyI6tORZjBpyDqUhTJsvDHUzhizHUwTAMdTBijHUwTAMdTBMWZIUwYsxgZyBP/Z'
const tokenPocketIcon = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/AABEIADwAPAMBEQACEQEDEQH/xACVAAACAgMBAQAAAAAAAAAAAAAAAgUHAwYIAQQQAAEEAgEDAQUGBwAAAAAAAAEAAgMEBRExBhJRBxQhNEGxExU1RIHSRmFxcnN0kQEAAgIDAQAAAAAAAAAAAAAAAAIBBgMFBwQRAAICAgADBQUGBwAAAAAAAAECAAMEEQUSMQYyQVFyExQWM+EhIjRzgZFUVXGSk8HR/9oADAMBAAIRAxEAPwCLAGh7l3wATlMNDwjQ8obhoeEaHlDcNDwjQ8obhoeEaHlDcNDwjQ8obhoeEaHlDcR2t8JGA30jCOOAniz7YMfftMMlenNKzeu5jC4bCwWZWNS3LZeiNremOpkSi6wbSpmHmBJCl09lLd2pXfRsRNmmjjdIYiQwPdou/RebI4nh00X2rkVOURmC8/Ugb1M9WFkWW1oanUMwBbl6bMt4eikR/iOT5/lh+5U/44s/lq/5T/yWH4YX+NP9n1iS+i0bGOLeo3E/zrD96B24fY3w0a/N+kD2YXwzTv0fWVx1N0Rmel9S2Gsmqk6FiLfaCeA8H3tVl4Vx/B4qeSvddwGzU/U+kjrNLncKysD7zgPWT316frNPW8mtmN/KRusYRxwE0WWv0V+Dv/2ZPoFT+Pfjh+UssPC/wp9Zm8UvjKn+Zn1Vfv8AkXegzbVfNr9QloKpzfwRCJepVb1OerZiEkUzCx7T8wVkpusx7a7qnKujBlI8CIllaXVvW6gqw0ROMcnSdjcjfpOds17EkW/PY7QK7hiZAysXGyANC2tX16hOY5FRovuqJ7jsv7GRz+VmbrEEccBNFmx4rqW5iKrq8MEL2l5ft+97P9CtZmcKozbha9jqeULpdeE9uPn241ZRUUjZP2y48NM6z91TvADpfsXkDgF2iqPnIKvfKwdhOdR+ks2Kxf3dz1blMtlU6WOCIRLlqClWmsTyCOGJhfI48BrfeSnqqsusrqrUs7sFUDxJiWOlSO7sAqgkk+AE4zyt05LJ5G8QQbNiSXR5Ae7YXccLH91xMbH3v2VSpv0icxyLfb332677s37mRj+VmbrEEccBNFgpkToDp74fB/2V/oFzbifzOIeuyXLC7mJ6UlvqlyyyrMx6p1MRkshj3YWeWStM6IuEzWhxarfg9kbs3ExskZtaLagbXKSRuV7J7QV4191PuzsUYrvmABlVdT9d5fqZns7w2tS3v2eMk9xHBe48q38J7O4fCm9qCbb9a9ow1r0iV7P4vk545CAlW+4vj/UzSVv5q5jfykbrGEccBNFgpkS/MHIIqeHkPDIoHH9AFzjiCl785R1L2AS4YbBasVj4Khm05X1IwOIlZXnr3C57O8FjGn568rV4fZjiObWz1vQAraPMxH+p78jjeJjMFdLCSN/YBOc+oMhDlc5lb8LXCKzYfIwPGnaPldN4ZjWYfD8PHsIL1VhW5TsbEpWZcuRl5FyA8ruSNyHXunmgiExv5SN1jCOOAmiz1TCN3vHD3f8ASl5V8hDZ8zFJJ5JKkADoIbJgphBEIIhMb+UjdYwh3HQUBjoQ1DvKnmMNQ7yjmMNQ7yjmMNQ7yjmMNQ7yjmMNQ7yjmMNRXOKRmO5IE//Z'
const metaMaskIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOmV2PSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL3htbC1ldmVudHMiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMTguNiAzMTguNiIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTguNiAzMTguNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFMjc2MUI7c3Ryb2tlOiNFMjc2MUI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDF7ZmlsbDojRTQ3NjFCO3N0cm9rZTojRTQ3NjFCO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Qye2ZpbGw6I0Q3QzFCMztzdHJva2U6I0Q3QzFCMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0M3tmaWxsOiMyMzM0NDc7c3Ryb2tlOiMyMzM0NDc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDR7ZmlsbDojQ0Q2MTE2O3N0cm9rZTojQ0Q2MTE2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q1e2ZpbGw6I0U0NzUxRjtzdHJva2U6I0U0NzUxRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0NntmaWxsOiNGNjg1MUI7c3Ryb2tlOiNGNjg1MUI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDd7ZmlsbDojQzBBRDlFO3N0cm9rZTojQzBBRDlFO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q4e2ZpbGw6IzE2MTYxNjtzdHJva2U6IzE2MTYxNjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0OXtmaWxsOiM3NjNEMTY7c3Ryb2tlOiM3NjNEMTY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzQuMSwzNS41IDE3NC42LDEwOS40IDE5Myw2NS44ICIvPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNDQuNCwzNS41IDE0My4xLDExMC4xIDEyNS42LDY1LjggCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMzguMywyMDYuOCAyMTEuOCwyNDcuNCAyNjguNSwyNjMgMjg0LjgsMjA3LjcgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIzMy45LDIwNy43IDUwLjEsMjYzIDEwNi44LDI0Ny40IDgwLjMsMjA2LjggCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMDMuNiwxMzguMiA4Ny44LDE2Mi4xIDE0NC4xLDE2NC42IDE0Mi4xLDEwNC4xIAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjE0LjksMTM4LjIgMTc1LjksMTAzLjQgMTc0LjYsMTY0LjYgMjMwLjgsMTYyLjEgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMDYuOCwyNDcuNCAxNDAuNiwyMzAuOSAxMTEuNCwyMDguMSAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE3Ny45LDIzMC45IDIxMS44LDI0Ny40IDIwNy4xLDIwOC4xIAkiLz4KPC9nPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMjExLjgsMjQ3LjQgMTc3LjksMjMwLjkgMTgwLjYsMjUzIDE4MC4zLDI2Mi4zIAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMTA2LjgsMjQ3LjQgMTM4LjMsMjYyLjMgMTM4LjEsMjUzIDE0MC42LDIzMC45IAkiLz4KPC9nPgo8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9IjEzOC44LDE5My41IDExMC42LDE4NS4yIDEzMC41LDE3Ni4xICIvPgo8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9IjE3OS43LDE5My41IDE4OCwxNzYuMSAyMDgsMTg1LjIgIi8+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIxMDYuOCwyNDcuNCAxMTEuNiwyMDYuOCA4MC4zLDIwNy43IAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iMjA3LDIwNi44IDIxMS44LDI0Ny40IDIzOC4zLDIwNy43IAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iMjMwLjgsMTYyLjEgMTc0LjYsMTY0LjYgMTc5LjgsMTkzLjUgMTg4LjEsMTc2LjEgMjA4LjEsMTg1LjIgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIxMTAuNiwxODUuMiAxMzAuNiwxNzYuMSAxMzguOCwxOTMuNSAxNDQuMSwxNjQuNiA4Ny44LDE2Mi4xIAkiLz4KPC9nPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iODcuOCwxNjIuMSAxMTEuNCwyMDguMSAxMTAuNiwxODUuMiAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjIwOC4xLDE4NS4yIDIwNy4xLDIwOC4xIDIzMC44LDE2Mi4xIAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMTQ0LjEsMTY0LjYgMTM4LjgsMTkzLjUgMTQ1LjQsMjI3LjYgMTQ2LjksMTgyLjcgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIxNzQuNiwxNjQuNiAxNzEuOSwxODIuNiAxNzMuMSwyMjcuNiAxNzkuOCwxOTMuNSAJIi8+CjwvZz4KPHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxNzkuOCwxOTMuNSAxNzMuMSwyMjcuNiAxNzcuOSwyMzAuOSAyMDcuMSwyMDguMSAyMDguMSwxODUuMiAiLz4KPHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxMTAuNiwxODUuMiAxMTEuNCwyMDguMSAxNDAuNiwyMzAuOSAxNDUuNCwyMjcuNiAxMzguOCwxOTMuNSAiLz4KPHBvbHlnb24gY2xhc3M9InN0NyIgcG9pbnRzPSIxODAuMywyNjIuMyAxODAuNiwyNTMgMTc4LjEsMjUwLjggMTQwLjQsMjUwLjggMTM4LjEsMjUzIDEzOC4zLDI2Mi4zIDEwNi44LDI0Ny40IDExNy44LDI1Ni40IAoJMTQwLjEsMjcxLjkgMTc4LjQsMjcxLjkgMjAwLjgsMjU2LjQgMjExLjgsMjQ3LjQgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDgiIHBvaW50cz0iMTc3LjksMjMwLjkgMTczLjEsMjI3LjYgMTQ1LjQsMjI3LjYgMTQwLjYsMjMwLjkgMTM4LjEsMjUzIDE0MC40LDI1MC44IDE3OC4xLDI1MC44IDE4MC42LDI1MyAiLz4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3Q5IiBwb2ludHM9IjI3OC4zLDExNC4yIDI4Ni44LDczLjQgMjc0LjEsMzUuNSAxNzcuOSwxMDYuOSAyMTQuOSwxMzguMiAyNjcuMiwxNTMuNSAyNzguOCwxNDAgMjczLjgsMTM2LjQgCgkJMjgxLjgsMTI5LjEgMjc1LjYsMTI0LjMgMjgzLjYsMTE4LjIgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0OSIgcG9pbnRzPSIzMS44LDczLjQgNDAuMywxMTQuMiAzNC45LDExOC4yIDQyLjksMTI0LjMgMzYuOCwxMjkuMSA0NC44LDEzNi40IDM5LjgsMTQwIDUxLjMsMTUzLjUgMTAzLjYsMTM4LjIgCgkJMTQwLjYsMTA2LjkgNDQuNCwzNS41IAkiLz4KPC9nPgo8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjI2Ny4yLDE1My41IDIxNC45LDEzOC4yIDIzMC44LDE2Mi4xIDIwNy4xLDIwOC4xIDIzOC4zLDIwNy43IDI4NC44LDIwNy43ICIvPgo8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjEwMy42LDEzOC4yIDUxLjMsMTUzLjUgMzMuOSwyMDcuNyA4MC4zLDIwNy43IDExMS40LDIwOC4xIDg3LjgsMTYyLjEgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMTc0LjYsMTY0LjYgMTc3LjksMTA2LjkgMTkzLjEsNjUuOCAxMjUuNiw2NS44IDE0MC42LDEwNi45IDE0NC4xLDE2NC42IDE0NS4zLDE4Mi44IDE0NS40LDIyNy42IAoJMTczLjEsMjI3LjYgMTczLjMsMTgyLjggIi8+Cjwvc3ZnPgo='
const rightIcon = '<svg viewBox="0 0 1024 1024" width="16" height="16"><path fill="currentColor" fill-rule="evenodd" d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z"></path></svg>'

export { ethIcon, bscIcon, tronIcon, phoneIcon, pcIcon, imTokenIcon, tokenPocketIcon, metaMaskIcon, rightIcon }