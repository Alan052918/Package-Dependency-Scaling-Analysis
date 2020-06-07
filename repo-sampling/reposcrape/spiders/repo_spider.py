import scrapy


class RepoSpider(scrapy.Spider):
    name = "repos"
    allowed_domains = ["github.com"]
    start_urls = [
        "https://github.com/search?l=JavaScript&o=desc&q=javascript&s=stars&type=Repositories"
    ]

    def parse(self, response):
        for repos in response.css("li.repo-list-item"):
            relative_url = repos.css(
                ".mt-n1 a.v-align-middle::attr(href)").get()
            yield scrapy.Request(response.urljoin(relative_url), callback=self.parse_item)
        next_page = response.css("a.next_page::attr(href)").get()
        if next_page is not None:
            yield scrapy.Request(response.urljoin(next_page), callback=self.parse)

    def parse_item(self, response):
        actions = response.css("ul.pagehead-actions")
        yield {
            "name": response.css("strong.mr-2 a::attr(href)").get(),
            "watch": actions.css("li a.social-count::attr(aria-label)")[0].get(),
            "star": actions.css("li a.social-count::attr(aria-label)")[1].get(),
            "fork": actions.css("li a.social-count::attr(aria-label)")[2].get()
        }
