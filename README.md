# Minimum Porter

This is a portfolio template

## Example

- https://sff1019.github.io/

## Configurations

### Research
```
{
  "title": "Research",
  "id": "research",
  "interests": {
    "title": "Research Interests",
      "description": "Machine Learning, Generalization of Deep Learning, Optimization, Affective Computing"
  },
  "publications": {
      "title": "Publications",
      "items": [
        {
          "title": "This is a test",
          "authors": [
            {"name": "name1", "link": "hoge/hoge", "isMe": "false"}, 
            {"name": "name2", "link": "hoge/hoge", "isMe": "true"}, // This name will be bold
            {"name": "haha3", "link": "hoge/hoge", "isMe": "false"}
          ],
          "conference": "arxiv",
          "link": "hoge/hoge"
        }
      ]
  }
  }
```

## Deploy
```
$ npm run build
$ npm run deploy
```
