const {test, expect} = require('@playwright/test')
test('Open Application and Store the cookies', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/')
    await page.locator('//a[normalize-space()="Test Login Page"]').click()
    
   //_ga=GA1.1.308820216.1753691220; express:sess=eyJmbGFzaCI6e319; express:sess.sig=tdt42nQZiQvICqmrvHQ1_16fHk0; __gads=ID=0be280a06482ffe0:T=1753691219:RT=1753958923:S=ALNI_MY1jnqHt1Cav2jkd2Ky-LB3tASQ8g; __gpi=UID=0000117026a1849f:T=1753691219:RT=1753958923:S=ALNI_MbG4_5Ho-7M80G6l046hJ8Rxr4KfA; __eoi=ID=a908005ec18f3184:T=1753691219:RT=1753958924:S=AA-AfjbKcf5dmr5tIGNuao3IYsGJ; _ga_90GRT6N40B=GS2.1.s1753958520$o4$g1$t1753959014$j26$l0$h0; io=Yz_H1Sj9al4wk_cpAIuy; FCNEC=%5B%5B%22AKsRol998YW5JPxiAiCfSj2nx5U4B__rfY4mDNVocF2VtPFPnYoHJaGSEmLKHJ-OJJlrOlpQ8KI0p6kydytoJAphaXhKnxE9dGetP8Wgms8-H2gFNpIzUDSXPNPsJ_juDVI4bzYRocLUtQnT2r_CWtOmiqp7l4t6HA%3D%3D%22%5D%5D


})