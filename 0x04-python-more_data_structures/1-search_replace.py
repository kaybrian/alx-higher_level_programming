#!/usr/bin/python3
def search_replace(my_list, search, replace):
    def replace_elem(elm):
        return (replace if elm == search else elm)
    return list(map(replace_elem, my_list))
