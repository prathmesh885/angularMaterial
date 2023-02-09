import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Icourse } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Icourse[] = [
    {
      id: 11,
      description: 'Angular Material Course',
      longDescription: 'Build Applications with the official Angular UI Widget Library',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxHzP-4-hoo-rVNtDzwVGzTCFBegB8tovAA&usqp=CAU',
      category: 'BEGINNER',
      seqNo: 0,
      url: 'angular-material-course',
      price: 50,
      lessonsCount: 11,
    },
    {
      id: 19,
      description: 'Angular Forms In Depth',
      longDescription: 'Build complex enterprise data forms with the powerful Angular Forms module',
      iconUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhMWFRUVFRUVFRUVFRUVFRUQFRUWFhUVFRYYHSggGBolGxUVITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABGEAABAwICBQcHCQcEAwEAAAABAAIDBBEhMQUSQVFhBhMiUnGBkSMykqGxwdEHFDNCYnKCssJDU2Nzk6LhFRYX8ESD0jT/xAAbAQABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADURAAIBAgQDBgYCAQQDAAAAAAABAgMRBBIhMQVBURNhcZGx0SIygcHh8AahQhRTYvEVIzP/2gAMAwEAAhEDEQA/AOoS07XtLHtDgcwVSVvJ4hpZC76wfZ54EWuAr9iBz7kXGpKOzB5U4z3MDUaCrBgItbiHx+9wVDUQS6xa4BpBINyDYg2Pm4etdeXMtJHy0v8AMk/OVo4Wo6kmpcgeWHhHYtOTHJASxifnLOLiG4Xtbad2KEFSLljrBwJadxINsPBJ0NDWmNxpy4MJINiBrOtjq329ipjxz9d1TiOHQxeaM5K62tvHx7u70DcNipYd/CtHuv3Z95o0AqeCvc3A9Icc/FXOi2mdrnMHmkAgnaRfBcziuD4qhrlzLqvbc3KXEaFTnlfRj8fmO+832OTSmtopA0jVxJacxsDvikN0fJtAHaUG8NWdkoPbp3ssWIpK7clv1IgTNbWMibrPPYBiT2BStI0EwZ5ItLtoI2fZJNr9qxdUx+sRJfW2h17+ta2A4HKu81WWVLkt/wAeIJX4lGKtT1fXl+RnSdY+d2s7Bo81uwD48VHjhUoRBONjXZUqMKUVCCslsjFlKU3mk7tjUcanUU+pcEazXYOYciPcRsKZDUbnAZlNVnThG9RpLv8A30FTpzm8sE2+7UsPmQfjAdfew4SN7vrji3wCzlXAWvc0gjG9iLHH/pU8z7h3oVFY+S2u9zrZaxJt2XyWNX4zShpD4/6/vn5GrR4HXqa1GoLzft/Za8kp2NY6NzmhxeSGk2JGq0Yb8irmspNbEZ+0LAVmY7E7R6Vni8yQ26pJc3wKzocRl2mdq1+n5KcV/HPizUqmv/JfdexoKqlD88CML7VVT0jm7LjePepkfKQOFpohfrswPgf89imQVMMnmSC5+q/on/K3cNxKlU0T16Mxq3DsVRV5wduq1X9FCpdKywvv9itH6PDs2g/dI9xT8ejBbzT4o6VaNgCTdiA1SoIXOyHfsU2KkaNjR2kH1KS22+/YPefgqJVehGw1T0gGePsVhGw7ky1+7D2+KW0oeTbLFYY0jTHB4HA+4qvVzUM1mEcMO1R6eh65v9n/AD8E8aqjHVkZtIiQxOdkPgpTaBtuljw2KaABgBZAqmVeUttClyIYoIuo3wukS6NiP1bdmCmIio9pNc35jXZSVGinDFp1huyP+VCItgVprKPWUjXjHA7D8d6Kp4jlLUkp9ShCWhNEWmx8RkkopO+pYdKYiOfcudN5Z1X8P0D8VKZyrqTC+Tyesx8Y8021Hh+y+es0eKxnhpo11XizermWk/ppf5kn5ynTy1q/4foH/wClRz173Oc82u4lxw2k3O3ii8LB0pNy5kZVovY1mheU76eMxBgeASWkkjVJ34Yi/YqSSQuJccyST2k3Kv8AkhympYacsn6Lw5ziAwu5wHIYA7MLFZj54x7jYatySGnYCcAr6EoupO0Mvf19h3JNLUeutZyLPQk+8PYshZa7kV9HJ94exSxq/wDU/oSjuaG6MlJTVVVMjbryODW7zv3cSsW6V7luVt2WrHSExVUUcgtIxrhxGI7DmFQ1vLCMYRMLz1ndFvhmfUs9X8oKiXAv1R1WdEeOZ8UPPGU4fK7vu9zRo8JxFTWSyrv38kX+lNFUMfnSGM9Vr9Y+iQSs3WywDCESH7Ty0D0QPeq+6CplxXEvSMmka1Hg1CGs7zffovJe4t0hKSiQWfOcpu8m2+/U1YU4wWWKsu4CCCAUSdiLV5jsTK6Nyk5JamjY3AeVhvJJbMtf9IPw9E/gO9c4Vzi46MzadeFa8o9Wv3xAiRoJiZKp66RmTjbccR4HJW1LyhGAkZbi3H+0/FZ9BE0sXWp6Rlp5+oFiOHYav88FfqtH5r73N9QzxTYRysJ6pJa70SLnuVi2hcNoXMbqyodP1MWDZCR1X9MevEdxCMjxSf8AkvIw8R/HHvQqfSXuvY6C2j3n1JwQgLNUXLRpwmjI+0zEeicfWVo6Ksjmbrxu1m3tkRY7iD2q+GK7TaRg4rA4rDa1YNLruvMcsiKUklTQEJRFJfK0bVHkqtw8VOKYh9MyVDRtv2KJJI45lNlWKJJIekqzswUZ7ycyjKIhWpDoae0HBM8weCkI1ZGTWxJGV1SpeijdzoXGwmbqXOQfcOjJ/EAOwlP6g3JuSJp2e5Xui5Kxoqm0yrlaQS0ggg2I2gjAgpslWemKhrgJHG0mAcf3lhYOt17DHfn20D9IsBsbjiQbKiVRQ0m0n4oXZy5K5JJRJAkBxBvxCWCpkbWJ1FV36Ds9h9xW85FHycn3x+VczuV07kdTSMhLpG6peQdU5gAbRsUMRUXY5XvdBFJ3L+yp+V0d6R56pY7+4D3q3UPTketTTD+G4+j0vcsiqr05LuDcNPLXhLvXqcwRoILCO6AgggkICCCCQgLRchNFc/Utc4XZFaR33gegPHH8JWdXW+QmjOYpWlws+XyjuAPmD0bd5KtowzT8ADiVfsqDtvLRff8Ao0UjAQWkXBBBG8HAhcF5S6KNJUyQ7AbsO+J2LT7u0Fd+WD+VTQ3OQtqmjpQ4P4xOOfcce8ourG8fAwsBWyVcvKWn15HKUEEEIboEEEEhAQQQSEBb3krdtK37Tnu9YHuWDXR9Ex6tNCP4YPpdL3ovBK9S/cYP8inbCqPWX2Y86Z29NuJO1OlqTqrXRxQwWpJCk8y47ClijcdwU0OQSEkhWjaEbTf1JxkDRkApXHKlsDjkCU8zRzjmQPWVaIJnIa5Dj0cwZ3Ps9Sf+bs6o8E+Alc2muyDbOfkHemJHFSXKLOVsI3UQtHlkkpMjg0A6oJuQ0DM27VRaaLdc2TtU8xSOP1XG4PE5jxVRVyEuuuYxGZVZZt7sLjtoTdBSNLyxz9RpBN7F1nDgOHsWiZDTjF07ncGQm573uACy2jojfXthkOO9W8a0cJGXZK7/AOgStbNsXQ0kyP8A/PFqu/eyESSDi0W1WHiBfitbyAqHOhkDiSRKTcm5Os1pNyeIJ71z9dA+T6Eine4/WlNuxrWj23U60UoProQpv4jVJMrNZr29Zrm+IIR3Sozig2roJTs7o5Kgnq6PVke3qvcPBxCZXOdx6AndXQEEEEhwIIIJCLfkror5zUsjI6IOu/8AltxI78B3rtKx3ycaK5uAzuHSmItwib5vibnwWwLrC5R9CGWPictxPEdpWaW0dPf97hIkFy24uACRfEA3sSO4+CRVU7ZGOjeLtc0tcN7SLELmWjuVZ/1UyOPkpvI8AwG0TvH85XVFOE1NAtfDyoySl0ueetN6OdTTyU7s2OIB6zDi13eCFCXTflX0NdrKxoxZ5OT7hPQd3G4/EuZISccsrG7hqva01Lnz8QIIIKJeBBBBIQa67HEGtazqsa30Wge5cpoI9aWNu97B3FwXRzXODjfEetanDablmfgcx/JKiXZwfe/Re5P1RuS0zDUNdkcdxzTq0rWOZ3AUlKRJhmBElIg1IgwkbWpYalBMQYQCCBKRz7d6YRgXqJO0qW5NSBbSNwpqmG4IIuOKqzo9odl7VopYlXyM6RTSpwk7tJ/QmmyO6LooRtUuRvRTccZJAAJJNgALkncBtVNXRlNTcOCJz3BjRdziABvJwC65oqiEELIR9Vtid7ji495JVFyT5N8z5aX6QjotwPNg5/iPqWnus+tUzOyJ0421YEbCiRAqgtOd8pI9WqmH23H0iHe9VqvOWcdqpx6zWO/t1f0qjXP1Vacl3s7rCSzUIPrFeiAgggqwgCm6GoDUTRwt+u6xO5gxce4AqEuhfJlouwfVOHneTj+6D0z3mw/CVOnHNJIFxlfsaLnz5ePI3MEQY0MaLNaA0DcALALP8vNJ8zSuaDZ8vk279UjpnwuO8LSrkvygaU56qLAbth6A+/8AXPjh+FG1pZYnOcPodtXSeqWr+nuzHVhxHYu08h9MfOqVjnG8jPJyfeaBZ3eLHvK4vV5jsWk+TnTXzeqEbjaOezDuD/2bvEkfiQ9GWVmtxKj2kG1utfc67pGjbNE+F4u17S13YRbDiuA6TonQSvgf50bi08bZEcCLHvXohcy+VfQ1iysaM7RyduJY4+seir60bq5mcOrZZ5HtL1/dDnSCCCFNsCCCCQiz5OMvUxDc7W9EF3uWvecVnuQ9OH1Bvk2J57CbN95WlqICw2Pcd63eFNZGur+xxn8jnfExj0iv7bGwpEVW9u2/ao4RrTkk9znloWUdeDmCOzFPNqWHaqlqUFU4IlmZcCZvWHiiNQ3eqtGFDINcsHVY2XKbdVk5YKMCjTWGFlxOZugiCNRYjIEJD0388j6wTM2kGDLH1BbCNwXUODRc/wDSq1gvig+UvNz4blM0dRuleGN25nYBtJTt21ZJFvoLkz86brueWNDrCwF3WzsTlnuK2OjNAQ0/0bBfrk6zvE5d1k9oyJkbGsbcBosMPEqYZQsStWlOTfIllV7jZYURS3PCbJVSHAiuklEpCMny7j8rG/fHb0XO/wDpZla/l0zoQu3F7fEA/pWQWFilarI7Lhc74WHddf2wIIIIc0B6jpnSvbEwXc9waO0n2LuGjqNsMTIW5MaGjjbM9pOKwHyZ6K15H1ThhH0GfzHDpHuaf7l0pG4eNlfqc3xevnqKmto7+L9kRq4vEb+aAMmqdQE2GvbC53XXL38hq0kktYSTcnnBiTmV1lBWTpqe4HhsZUw6eS2vU49UfJ9Wk3DY8v3g+Ca/49r90f8AUGa7Mgo9hEufE6zd3by/JB0TzvMx8+AJQ0B9jcFwwJB4596LTOjm1EEkD8ntIvuP1XDiDY9ynoK2wBfW60POdXTOje6N4s5ji1w+0DYplb35VND6krato6MvQfwlaOie9o/t4rBIKUcrsdNRqqrTU1z9eYEEEFEsNh8ncXSlfuaxvpG/6VrZYw4WKyvInoxSP3yW7mtB/UtWHXxWthoONKMupwHHJ5sbPusvJIpKsc26zsAfNd9U8CdhQVvUQNe0tcLg5hZfSFNLTG7SXRk4XxA4Hd2rVo1c+j39TLjqWQSmqqg0wD5zbcRiFOhrI3ZOHfh7Va4tCcWSrpQSGm6UFUxhwJQSQjCgINKCbMgG0eIQ+cN6wUWhHNzGgI10P/bdOf2f9zvip0HJuFuIjHbgfaiXj6fRnQZGYPReg5ZiNVtm9dwsLcN/ct7oXRDYG6rBifOcc3H4cFNi0a3j6vgpLKJo3+I+CErYp1NNl0JJWHGNICJ10kwN4+P+E26McfFDpCDcUy4pbmhNkKSGEoroFBSGKbllHemB6sjT3Frm+8LDroPKJmtSyjdqu8HBc+WNjlarfqjrOCSvhrdG/swI2NJIAFySABvJwARLVfJ5ornqnnXDoQjW/wDYcGD2nuCFjHM7GlXqqlTc3yOicntGimp44doF3HfIcXHxKl1tU2KN8rsGsaXHsAun1jPlK0nqQtgBxlN3fy2EH1u1fArQk1CLfQ5GlCWIrKL3k9fVszT+XlZc2LBibDmxgNgvdF/v2s6zP6YWYQQHaT6s6r/R4f8A215GgqPlCrQbAx/0x8U1/wAi12+P+mPiszV5jsTSsVSXUFnhaF38CNX/AMi12+P+mPiur6E0i2pgjnbk9oJG52Tm9xBHcvPi6R8k2lvpKRx/ix+oPH5T4q2lN3swHHYaCp5oRtbp0Nvyi0WKqnkgObh0TukGLT4gLgcsZaS1ws5pLXDc4GxB7wvR65D8qGh+ZqBUNHQnxO4TN87xFj4qVaOlynh1a0nTfPbx/Ji0EEaGNg3PJplqVn2nPd+n9KuKSW3RO3LtUHRrNWnhb/DafSGt70+F0dGC7GMe4824hPtMVUl1k/VlmkSMBBBAIOBByISaeS4xzCWVVazAzL6U0EWXfFdzdrc3N7N49aqAt45wGZVVpCiikxtqu6w29o2oyliHa0i2M+pnGO3J5kzusfEp+TRbxlZw8D4FNOgeM2kdyvvF7aktBwSu6x8SjaUy0J1qWV9Bh9pS7pgOR66bspCOhtphdWEMQsiESWDZYV7nRWsUtZpBscjoyQLbwbWIvn3pUc5cLtLHdhB96otNyh07yNhA7wAD61DabG4NjvGB8UB/5KUZtOKaT5ftjTXDVKmpKTTa57e5qSX8EhxdwVXSaXIwkxHWGY7RtViKhhFwcCtLD4iFZXj+TNr4edF2mvryASeCbcUovCbcUSigBKK6BRJyIxpBmtDK3fG/1NJ9y5uuoMscDkQQew4LE6V5NTQjWaOcZ1mjED7Tcx24hZuPpybUkjoOB4iEFOnJpNtNd+hSrsXI3RfzelY0iz39N+/WdkO4WHcuOgqQa+X97J6b/igKU1B3tc18bhZYiKgpZVe77+h3hcZ5YaS+cVUjgbtb5Nn3WXx7zc96qzWSH9o/03fFMqdStnVrFOD4d/p5uTlm0t4fvuBBBBUGmRKvMdiaTtXmOxMqxbAc/mYFO0NpF1NPHO3NjgSN7cnN7wSFBQTlbSas9j0ZTzte1r2m7XAOad7SLgqp5X6I+dUskNulbXjO6VuLfHEd64nHpGZoAbNK0DICR4AHAA4JwaZqR/5E39WT4ojtk1Zoyo8OnGSlGa0IZBGBwO0HMHcUSU5xc65u5zjjmSXH2laHRXJiQ2kmPNtBBDc3utjiPqjt8FTCEpu0UaNbEU6Ec9R2X7t1NU5mqGt6rQ3wACSAmZKu7jdPMdfELpYvRI8zndtti2myKeqd2JQRFoOBTSSZAiOm4pBlR1FK4YtxG7aq6aoIwyPFSp03N2iTSJktSG5qDNOXZ5blAmq7ZYn1KM+UuzPwWhSwyjrzJqJYOqGjbfsTZrNwTVZR82GHWa7WbrdFwNsSNnYo4KuioyV1qTcLE0VnD1pXzvh61ECNSyoax28uFs1CqpsCAbcd3FRXPUWedcS6uh1EaOpWz6J3SXP2hb2KDUUwZg59uOo4jxVjLUqJPUix1rW23ysg3Qg9l6mlGrU5u/l9yHzJPmOa/g0nW9E2J7k5R15jNj5u0bQd4VTI4F3QNxsP+FNjm5zoyHpZNk2jg/e3jmETR4biU+0isrXV/bcFrcUwv/zlLOn0W310RpBPdAuWYbWPiOo8HA2I2hWtDXNfke0HMLaUJJJtfcxu0hJtRfnoywKSjBUzR9LrdN2Wwbz8EzdkOrhUlCXdJ2A9ZVrEA3ACyIlFdDybe5YlYptNck6eou5vkpOs0dEn7TMj2ixWA0zoCemPlG3bsc3Fh79nYV1bWQc+4IOIOBBxBG4hC1MNGe2jNLC8TrUfhfxR6P7P3ucURroemuRsUt3wERP6v7M92be7DgsPpHRssDtSVhadhzafuuGBQNSlKG50WGxtHEfI9ej3/P0IiCCCqC7kSrzHYmQnqvMdiZVi2BJ/MwII1P0boeWfFgs3a92DR37TwClGLk7RV2UznGEc0nZd5Xq50Xyelms53k4z9Z2ZH2W5n1BX1Doymp7E3kk6zgLA/ZZkO03Kdnqi8+d4gj2XWvh+FSlrV07jnsZx6K+Ggr97+y9/IOjggpvom3ftkdi7u6o7E1PWF21JDSdo8R70sQXzt6TfitJYSMFaOxzVXEVK0s1Rtsj86lRVRbkpHzUcPH4JxlMzh6z7U/ZMqsO01ex2BNjxy7ipqpNMysYxvE+47AqmPT0jMGHDc4XHduVscLKcbpkHT6GzCRNA14s5ocOIVFTcp2n6RhHFvSHhgrOHTVO79oB967faqJUasNXF/T3RFxaG5eT0Dsg5v3Xe43Uc8l2bJHDtAPwVsysjOUjD+JvxS/nUYzez0m/FN29Zc2K8in/2uP3p9EfFKZyWZtkd3AD4qxl0vA3OVvcdb8t1Cn5TxDzGucePRHx9SmqmKltfysPmmyRDycgGes7td8LKX/o8H7pvrKy9RyimfgCGD7Ix8T7rKudUPOb3HtcVasLXlrOpb6+1h8knuzp8z1WVMyl1T8lUVT1yEnyO6px5jE86oKqsMr9QHoNPpOHuUzSVQWsc4ZgG3bsVJo42AWpwqipN1GttvEz+L1nCCpx/y38P30LyFtgllR2S4IGVbpzNibVdKMP2tIa7iLXYfAEdwVU8kG7SQRkRgQp8El2TD7DXd4kYPY4qqlkUI80WtbMudC6amfK2FzQ8E4u80hoxJNsDgt/T1DXCzcLDLbZYPkhD9JL2MH5nfpV9zxaQ4bCgcQk5WXIPoSeW7NESkkpLX3AO8XSHuQyQRcUXJBeqaeXE9p9qivmRCo6bkbmi51RNJStcAx7Q5pvdrhcbFRunVNp6cdD8XuVkMNmlYZya1RM0nyWa676Z3/rcfyu+PisvUU743Fj2lrhmCLFTYKkjIqxbWskGpM0OHrHYcwh8Rwb/ACpv6GxhONTh8NZZl15/kyNXmOxHS0b5DZjb7zkB2nILQaZ0dSxPa4SmRjm6zWYBwNyNV7hnlsAVPW6aJGpGA1oyAwFlVguDVq2s/hX9ssxnGqUG+y+J9+iX3JkUEEHSltK4fV+oD+rvw4Kf/rzZBYHVAwtkButZZBzy47ypk1LLAW86xzQ9ocLtIwPaM+C6ajw+hQSjFav9+py+KxVbEu83f0Romyg7Qe9S6R8YPlASLHBpAOtbonHZdZpjr4p5pUpUbq1wBRsy8a5K55o2hUrU61RdMWUtTVt2Y+pF86ceChMKarKwRjDzjkN3EqOTWyJpEXS9RrP1er7Tn7lCCRrIwUWo5VYkOBGkgo0hC0oJsFLBTCsLugEkFGEwhYSkgFKTDHSKk4X7vh71UVJQQXnEn6I7mkvUo9MC8T+y/hiqGklRoLf4O705ro/sY3GV8cH3fcsGTIzMggtcw7EqKXVglf1yyMePOO/K3xVRJMggoR5+JY1t4Gx5L4UzT1nPP92r+lTpXokEFP534hkPlRoohZrQdgHsTMsiNBUItM9UzYntPtKgTVCNBHRREjOqVT6bqLln4vcjQRFL50RlsQI5VOikQQRiIFVp1x1m/d96rAUaCOpfIgOp87DBTkkpda5vYBo4NGQRoKduZEXBMW9m5Toqtp4dqNBVzSINEhkrd48QnDUMGbh43QQVWW5CwxLpLYwd59wUBzyTc4lGgpqKjsTCCWEEEhC0oIIJhASgUEEzELCAKCCiIUjQQTCZ/9k=',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/main-page-logo-small-hat.png',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 1,
      url: 'angular-forms-course',
      price: 50
    },
    {
      id: 18,
      description: 'Angular Router In Depth',
      longDescription: 'Build large-scale Single Page Applications with the powerful Angular Router',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY31tYUulnfGAnF6seZ_rgpmPEGelx9bJhfw&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/main-page-logo-small-hat.png',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 2,
      url: 'angular-router-course',
      price: 50
    },
    {
      id: 17,
      description: 'Reactive Angular Course',
      longDescription: 'How to build Angular applications in Reactive style using plain RxJs - Patterns and Anti-Patterns',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPwnKBebTepOS66gBTJvIDiurUXPZvGNYAA&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/main-page-logo-small-hat.png',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 3,
      url: 'reactive-angular-course',
      price: 50

    },
    {
      id: 3,
      description: 'RxJs In Practice Course',
      longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxHzP-4-hoo-rVNtDzwVGzTCFBegB8tovAA&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/main-page-logo-small-hat.png',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 4,
      url: 'rxjs-course',
      price: 50
    },
    {
      id: 4,
      description: 'NgRx (with NgRx Data) - The Complete Guide',
      longDescription: 'Learn the modern Ngrx Ecosystem, including NgRx Data, Store, Effects, Router Store, Ngrx Entity, and Dev Tools.',
      iconUrl: 'data:image/jpeg;base64,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',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 5,
      url: 'ngrx-course',
      promo: false,
      price: 50
    },
    {
      id: 2,
      description: 'Angular Core Deep Dive',
      longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnXgnv_sRluasHmu6Sr_VRU2Efvq9aLi_UQ&usqp=CAU',
      lessonsCount: 10,
      category: 'BEGINNER',
      seqNo: 6,
      url: 'angular-core-course',
      price: 50
    },
    {
      id: 5,

      description: 'Angular for Beginners',
      longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_-PGEKwIK8VynXcWi8Buoq06IwA_Sdj71A&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/main-page-logo-small-hat.png',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 7,
      url: 'angular-for-beginners',
      price: 50
    },
    {
      id: 12,
      description: 'Angular Testing Course',
      longDescription: 'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7D6aCR6BjiWcbrTpuwS8KNFhW78k5pXjf4gMDwSMIJJxBXFzEdcDQOSl7saYBUxjUGjs&usqp=CAU',
      category: 'BEGINNER',
      seqNo: 8,
      url: 'angular-testing-course',
      lessonsCount: 10,
      promo: false,
      price: 50
    },
    {
      id: 1,
      description: 'Serverless Angular with Firebase Course',
      longDescription: 'Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTS1v6GitKyaIYicN80Rw5eYM2iW4SjXzcQ&usqp=CAU',
      lessonsCount: 10,
      category: 'BEGINNER',
      seqNo: 9,
      url: 'serverless-angular',
      price: 50
    },
    {
      id: 16,
      description: 'Stripe Payments In Practice',
      longDescription: 'Build your own ecommerce store & membership website with Firebase, Stripe and Express',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RGw5KwPk4JJD-9Ai_xaGU9W6odTPCPeODw&usqp=CAU',
      lessonsCount: 10,
      category: 'BEGINNER',
      seqNo: 10,
      url: 'stripe-course',
      price: 50
    },
    {
      id: 14,
      description: 'NestJs In Practice (with MongoDB)',
      longDescription: 'Build a modern REST backend using Typescript, MongoDB and the familiar Angular API.',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWK4hmvoo6bHqhHqTv_XWYaq5x0kdza8Dhw&usqp=CAU',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 11,
      url: 'nestjs-course',
      promo: false,
      price: 50
    },
    {
      id: 6,
      description: 'Angular Security Course - Web Security Fundamentals',
      longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCnQF0r7SbQyE1p33U2yys16pgM4rjpP8lw&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/lock-v2.png',
      category: 'ADVANCED',
      lessonsCount: 11,
      seqNo: 12,
      url: 'angular-security-course',
      price: 50
    },

    {
      id: 7,
      description: 'Angular PWA - Progressive Web Apps Course',
      longDescription: 'Learn Angular Progressive Web Applications, build the future of the Web Today.',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtIPC4hFE7QaLW3N9QLf4L6HlBN2vlLmL2A&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/alien.png',
      category: 'ADVANCED',
      lessonsCount: 8,
      seqNo: 14,
      url: 'angular-pwa-course',
      price: 50
    },

    {
      id: 8,
      description: 'Angular Advanced Library Laboratory: Build Your Own Library',
      longDescription: 'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JYFycwnmYjV3soJvKe3p1XemrPLmakQ1Og&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/angular-advanced-lesson-icon.png',
      category: 'ADVANCED',
      seqNo: 15,
      url: 'angular-advanced-course',
      price: 50
    },

    {
      id: 9,
      description: 'The Complete Typescript Course',
      longDescription: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXUwpKcpuzf0ru8VxezEt8ULeyvkj9fcYnA&usqp=CAU',
      courseListIcon: 'https://raw.githubusercontent.com/iamrk-js/imagesForMaterial/main/typescript-2-lesson.png',
      category: 'BEGINNER',
      seqNo: 16,
      url: 'typescript-course',
      price: 50
    }
  ]
  constructor() { }

  getAllCourses() {
    return this.courses;
  }
  getBeginarsCourses() {
    return this.courses.filter((obj) => obj.category.toLowerCase().includes('beginner'));
  }
  getAdvancedCourses() {
    return this.courses.filter((obj) => obj.category.toLowerCase().includes('advanced'));
  }
  getObservableData() {
    return of(this.courses)
  }
}
