import React, { useEffect, useState } from "react"
import "./addingposts.css"

const array = []

const AddPost = ({ people, userphoto }) => {
  const [user, setUser] = useState([])

  // when people changes we refill the array and set it to user
  useEffect(() => {
    if (people.length > 0) {
      for (var x = 0; x < people.length; x++) {
        array[x] = {
          id: people[x].id,
          time: new Date(people[x].data.time?.toDate()).toUTCString(),
          username: people[x].data.username,
          image: people[x].data.image,
          body: people[x].data.body,
        }
      }
      console.log(user)

      setUser(array)
    }
  }, [people])

  return (
    <>
      {user
        ? //reverse the array for newer posts get to the top
          user.slice().map(person => {
            const { id, username, image, time, body } = person

            return (
              <div key={id} className="insertPost">
                <div className="profile">
                  <img id="insideUserPost" src={userphoto} />
                  <h4>{username}</h4>
                  <p className="time">{time}</p>
                </div>
                <p id="body">{body}</p>
                {image ? (
                  <img id="insideImgPost" src={image} />
                ) : (
                  console.log("")
                )}

                <div className="social">
                  <ul>
                    <li>
                      <img src="https://img.freepik.com/free-vector/facebook-thumb-up-like-background-flat-style_23-2147819330.jpg?size=338&ext=jpg&ga=GA1.2.74868746.1610266636" />
                      <span>Like</span>
                    </li>
                    <li>
                      <img src="https://www.nicepng.com/png/detail/49-499826_png-library-library-comment-transparent-icon-facebook-comment.png" />
                      <span>Comment</span>
                    </li>
                    <li>
                      <img src="https://icon-library.com/images/facebook-share-icon-png/facebook-share-icon-png-21.jpg" />
                      <span>Share</span>
                    </li>
                    <li>
                      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUTEhIVFhUXFxUWFxUVFRUVFRUXFxcXFxcVGBUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGC0dHx8tLSsuLS8tNS0tLS0tLS0tKy0tLS0tLS0tKy0tLS0tKy0tLS0tLSstLS0tLS0tLS0tK//AABEIAPQAzwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMFBgEEBwj/xAA9EAABAgQCBwcCBgECBwEAAAABAAIDBBEhBTEGEkFRYXGhEyKBkbHB8AfRFCMyUmLhQnKCJDNDkqLC8RX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAiEQEAAgICAwEBAAMAAAAAAAAAARECAyExEjJBIhNhcZH/2gAMAwEAAhEDEQA/AO4LKEIBCEIBCEIBCFq4lNCFDc47Agr+mGOGGOxhHvuFyM2jnsXMpuAwEa3eduFDRTOIxHxXkA0e41c79o3V8loTsFkNtG5bT/k481j2Z3LbrwpWMajk2HdAzFa+mS0JGUbE/USTsoLDjdbU7DqHEVzTUnMuYf0g76qsTUL5Y2mJHRvWNQ95G45eQsrDJaMwnU1gA7ZUVHnmPAhaeET8F9A+GBxDqEK4SkpasKK4/wAIne8jn1Kjv6iq7hDOw6LLXa5wAycCXt5EG4Hmn4cw2NZwDX7x+l3AjYVNtrShGq7cbtPJQONyRAL2ChH6m5eIUUk9ITj5WJrs2We3ePccV0bDp1sdgezI7NoO0FcnlZ0Rmi/fGR37wVO6K4qYEUA2hxDqkftdku2rZXDltwvl0VCAhamQIQhAIQhALCyhAIQhAIQhAIQhAKs6ZzNGBu81pv4edFZiqRpJG1ox/iqbJ/K+uP0rUcthg6xq43O5QMaOYrqA2RpBO1OrXO/9peGQbBYMpt6OGJyBhesOCU/R1p2BTMky6l5eCCodqiFNOi7m3aaclsyc3Hljd1W7RenkrsyAFrzGHNdsU+KnlE9tWRxyHGFH2O8/LJ2bYaWNdx3jcVX8YwVzKuhmnJa+CY4a9lFtu4J5V2rlq4vFp4k3sIgeLMcb8DvW+yPU50BoDwOxy2MZlhEY4b/X+1A4dEJh6rrlh1T/AKdh8PZTbm7LoxP9tAaT+pvcdzG3yUuqPoDOd4sP+Ta/7mWr4g9FeFu1zeLDsisghCFdQIQhAIQhAIQhAIQhAIQhAl5oFzjGo9nne4+S6DPv1YbzuaT0XLsejakO5pYnzK47p4dtMcqLPxdaN08ArJIN7o8FSpabMSPUZVoOHBXfD70WPKKb9cpiTNFOSwqomXhlSsu6gURC8t1gSiE2yInA8Lq5tWZhAhUHSTDC09o2xC6K66iMSkw8Gy55Q6YSg8JmvxECv+QseYUMxurGIyDxccb16+q3NH/yo0SEbA96nQrGKQPzLb6hVjpTOKlM6KzBZFYf2vAPImh9V1ZcbkX0dUc+i6/KRNZjXb2g9Ft0Twxb45s6hCF3ZwhCEAhCEAhCEAhCEAhCEEXpJE1Zd/EavmuRafRqQ6DMkDouqaWxKQmje8D1XKtLRUgnJtT0JWfdLTohR8BgntSNyu8pGING5512BVbRuGdd5OZP9qylkRoqxhNeaz58y1a+ISzzGpURGnmESeNva7Ve2uyoKpz8Mno5PaOLQagNacuamJPRiKwEiuv3aCuq0gDvWJNCVP8ALi7T/X9VS+wpgOpQpcSPqglQWjcN7Xlj+BH2Uvi0sXnVao5X4Qpx6MSQGAczRbTZmOb1Zyuq1iejEWJUuBaa92jtagoc+NVHQMInoLh2T3Z1o79NNwBrQ8FP8/zdqzs/VUmpuLSahvIoSC1247QR5LcxGFWjuNPsmMXhxeya+JD1XMIcTyzopF7Q6HXhX3C5R2tn1aOks6bakdae66no1G15aGdwp5Ehcrg2d4gro+hESsAt/a9w87rVo7Yt8cLChCFqZQhCEAhCEAhCEAhCEAhCEFa0wfeE3iT5D+1zLSYVafm0LommD/zGjcD6E/Zc90hbVhpv9wsm6eWzRHCqYQ4iI47zXwXRcHoWhUGRliATmKA1BqDW4AVuwGZsAuEzy14Y3C3Q8OYb0WJmC1gWZaYstfFpgatAbm3Lir3wjxmzeG0LyfBSUQjWURgZAJANeKkpmgcLqPi0xy3WyrXCtFj8C0Xoky03QUKfizIor3FOXjMShselw+E5vAqu4BMa8AA5tqw82mnorBiUexVD0ZnPz5mGRapeOObT6BcvrplFYpVl3Hmr5oE7uxR/Ie6opBD/AB9Vd9BzeJx+676e2Td6rehCFrYwhCEAhCEAhCEAhCEAhCwUFK0odWKeDT1sqXiTdZh5uPVXDSE/mv4Bo9yqnMNqKb9br/8AFi29turpzJ87Fgxuw1yIfa3Ftrq0ruvkr3hcTVKpGljNSM19M6Gu5wOXRXXDnghjhkaeRUbOol10zMZTCzQZ+gWpiURz22zzW3MSlWa0Ohdq92thXnsVVlNIYhiGE+A5r21zcKGmdDtXKOWq/qQkYEZji4OupIycaLRxiEEcaeiXhs1EcCTLP1RQkgtOYrWm1bz5p7AP+GiAEF1SWCw8bK3jwicqnuP+wecHNYMyR1TTcVDhTbuUWcXjRYvYwoJqP1Pc4ajbA0tcm6kzh+TjmMyLc/BRNwf7R89NEqjaKRnmYjvcagPcwW2a5/pXXEXNY17zkAT5XVN0Ph1hPf8AvdreZJCmI/MuWzK5iFvcMjyPkf6Vx0Is5/zaqfBNQN6t+hQo53iumieWbfHC5IQhbWIIQhAIQhAIQhAIQhALDllYcbIKJjv/ADInhTwVYmMuvqrLjpsHbXOPqVWI5v4LFt7btXSp6WSeswkDI15g2Ka0MnwWGC79TMv9OzyU5PQO0hkbbt+3oFSsOBhzG43HkdyjvGlo4zt1aTmu6BuK0cYkNZ/aMz2jYVpSE6dqs0sA9oK5dteGc4zcNLB518FpbV7ailCNcDZauS2sQnHRgGkvdYilNRtD+6n6uS3oUo0rYEmG3V+a7TOWN34xbTw2W1G12lKmolqLYmXhjVVscxUtY5w2AmvJVUyynKblXdPMaAb+HYaufQOpsaT70WzovB1YPgD0JXPpMOixA5xJc41JN6krqmCQaMp8yXXOPGPFmxmcp8j9NUim1XPQ19XV4dVTop7oO4g9VbNCv1ndanVRp9ld3qu6EIW5hCEIQCEIQCEIQCEIQCamjRjuR9E6mpjKnEff2QUXSp+q5jNwr4/KqqTO0/6R1U1pHM68yfEegVemn0/3OHufdYdk3k364rEzCNSWn/IWO5wyVaxCW1ZhrstbMcdqsbwS0OGYPsfenmtDGG64ZEGYdfnl7Kq0dt6Vh2ClpGaLLHLYfZaMk2rQtvs1TFomVgl5oUrVOxZ0AZqvw4fwFbTIQ+XV0eRU1HMQ02eqqunkTs5V9MyKeZv0VthQqKl/UCJrQ3NGxpPzqox9oVzn8yq2iUHtHs3D7rp2HClBvv1XP/p/DqXH9ra+LrBdClLOpuAHoVfb7OOv1NEHVIOw0+eStOhL+/TiPnVVyYFC/n7lTGg0x+ZTeeirp9zd6OjoQheg88IQhAIQhAIQhAIQsEoMrRxWcEJhO3YOKgNINPJaWJYw9rEGYbTVaf5O9gqw/SB8y7XiGwFQ0WAGeXILls2RjDrr1zlLSnH60Unz+eSjpppBaN11NYbJF+s47fc/PJaUZoc+py9vlFh+t1cNCTP5rmHJw6gmh6KMjW7aGdg1h4UqpKVh9+uyn3P2TGMQu8XjJwIPMA1HnTzV45U6K0dnWxWZ3FiOKsMOFVclw/EjLxddt2k94baf0uo4LPtitBBzAI4gq2evxlbXs8o/y3WQVsMandUJxgVVzRZQFc90uZrMiHgV0iZswlc+0rYQHgftUfYJ5xlF/T2FRjv5OYPIfc9FepHf+4k+FTToud6DTtIhh8C4eDT9gugyooYTeA6NqepV9vtNuWv1iisTdq63zb/Sa0anDDfrfySMWiXpvv4bPUrVlbZb/S3suV1NrVcU7BK4zBeB3tU7nW6p+NiEFgq+LDaMql7QK7qkrln4o0pX+lWdJ3tc3vV+/Cu5bNe7ympZNmnx5h6BY8OAIIIORFwfFKXnXQXTWNh8UNc4ugE9+HnQfuZucOtPFehZWYbFY17HBzXAOa4ZEEVBWiYcDqEIUAUTiukkpKgmNMQ202a2s7lqtqei4/8AU36gRY0Z8tLxCyDDJY4sJDormmjqkf4g2pwPhzxkT4FaIHccW+r8pDqIEN8U7Cfy2de90XPcc+pM7Mk1e1kO/wCXDbRpG5xdUu6KluWKJSYTzcYe4i4odgAA5K04dMAtcd5A8gB5ZrnHaEUVgwzEAGFu/LgdvssO/GYbNOVuny82GwCdpsPIhQUaJQHkAPE36JmBO60GGKjbX0TTjrP1dgoT5LJ5ctVcN6ThkvA31JG4Xr1I8lE48+kNwrtr1y6dFLMnmQzqg6znXc7YNzQqljszlDJufUf2tOEcxDPlPEyq0yLlWDQ3F+yiCE80a490k2a4nLka+agZg/Nybp5LbOEZY1LJjnOOVw7uwnVFk/DdxHzgqloFpF+IZ2EU/msHdJ/6jB/7CwO+x3q5Q2DddefljOOVS9PGYzxuDMfvMpvIVe0kwzXY4jOh9CrU2Faian5cOYeRVVqhw3Rs6kao4DzK6fLzA7z9gFAef9UXLJMasUcz7j3VjjY6xobAhvA1ABwc6lKeC1bsJmbhi1ZxEVKdMTWdepJv4N2deiwyKWPcNhcSPcKLksWaYjG/Ad3I3HOimsQhilRkbtO3isuUTi0YzEnjMNNwoDFooIIzW2yLTxUbiRF3ZjaFGvKbM4ilciihzXd/o1ifayJhE1dBeW03Md3m9S4eC4PNuuT8Kv30UxHs58w62jQnCm9zO+3xprr1e4ebLvCEIUKvHUWJUknaiFEoaJLhQrEVtqjYrpbed0otufnFMQYlQnda6BLm2SnxXNyQFg7FGWMT2tEzHSQw/SQsAabgeYrwUt/+qXirTY0VOfBqclO4bDyFa7DfI53WDbpjGbhr17ZmKlOSb83G4bQk7qXp42Hiq9iMd0R5edpNFIz2INp2TMhUuI/ydup8zUK6JWhy4VXfVh9lx2ZfINxbkpASisFaXE/KTDoT2vYdV7SCCN4+dV2nRrFmzcFsUWOTm/tcMxy2jgQuIDorBofjpk4wJP5T6NiDdufTePQlcd2vzi47h30bfCanqXamBImjRjuR9EQnggEEHbUZEJvEHUhvO5rvRYobpcAim5K12tTz70TZXpU8oQ3kGtaG23crfh2Mdo2jjwcNztjhwIVP3LLI5YajlzXLbqjOHTXsnGV5Y8apvkeihcVmM277VWGT1LA1208FH4hNCJSmYzWPRr/fLTt2flr9oSL39fNbuCYi6Wjwo7c4b2v5gG48RUeKj1gG4XpsT11KxhEY17TVrgHA7wRUHqnVUvpXPdthkCucMGFfOkMlrf8AxDVbVzVeOHuS2FNlZYrpJoWngtguTetsKyBmgdqitkjWShtQDm1RDe5pqDurxWUFRUFm4gNatNDnwKSyYrZ9j8804cliJDDsxmlFlkoHBaffh/yb1H3T8CM1+RvuUh0cEoFJWeakdI+nOkWs38LEPeaCYRO1ozZzGY4clb8ci6svFO5jvRcNgRnQ3Ne0kOaQWuGYIyP9Lp8zj7ZvDI0UEB4YWRG7n02cDWo5rHu11Nx9bdO28an45VsSSlVSFrYwsAVPL1WT6JLHedaoHWRXNrTaKJLRdYNVkBIxiC7K2FJgCt0pMscTYeakdu+g+J60OZlyf0OZFA4RAWnqwea6uvOP0oxv8HPwwT3Y1IL/APcRqHwdTzK9HKkol41qlb02EthVgutaIac0FlaJOSDJcnGPTBO/JNB2qaIJBYSGuySwgKIGSyVgZqRkjqtSPKVu2xW0cllBosnHMtEHit2G8EVBqEiLCDhQrQfAdDNWGigSg4JyFNPhte1ho2I3Ve3eK1Hl7lRkHENjxQ7xktxjw64I5p2WwDZZ9kl1isPdQfPBSMOvbzToCbhNpfanKoBFUFYCBQTbCllMMegmtF5YxJuWY3N0eD0iNJ6BerV5Ew6cdCiMiszhua8Hiwhw9F61k44iMY8ZOa1w5OAPuq5EvHI2LKS3NKBUhbYqy2ICEhtj83IdDBGV94QNxzTy+6bBrRJjktsbjYUmC6ygbcN1k+x61WOCdYbKRtDb8yWCkNKUFIUPnqsLFcllBn3SSKhZRRBqx5UO5qPLHwzUKYWHwwc1FDSgz9bP809ma1tsSI0oCtdjHQ3UOSCTCykNP2SgpGQsNQsBBlxsVrwdUp2M6ybgiyDZAJyXof6O4o+Ph7WvNTBcYQO9oAcweAcB4LzqG0yK6d9ENI+xmHysQ0ZGBe0nIPYL+ba/9irI5MPZZDkBFLKQ5tWBksA0KCbIGJzLyTUGHXJOTX2Ws2rTZQhtNhFLFQiBGr6J/YpSwx9QngbprVzSgpDgNlkHJJBvzQ0oFDaEErBQgw5ZrksE5JIyQBQQHWO1FeqSSgGClk5vTbzdKCBSwCk1Sa0QJmHIhGibmHJcI2CgbDXJ+XjOY4OaSCK0IzFiPQrWS4ZKDUpms0WEIFgX81nVFEIQak2c/BYhiouhCgIYKGy3WGyEKUHAckoZIQpSK5fNqycz4oQgNnmsnNCECNiBn83IQgG5o2IQgREyCyDl82oQgxXNJcUIUBmKU5ByQhA+3YlAoQg//9k=" />
                    </li>
                  </ul>
                </div>
              </div>
            )
          })
        : console.log("no user")}
    </>
  )
}

export default AddPost
